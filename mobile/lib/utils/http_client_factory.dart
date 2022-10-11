import 'dart:io';

import 'package:dio/adapter.dart';
import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:mobile/global_variables.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/services/hive_service.dart';

Dio createHttpClient({String? baseUrl, Map<String, dynamic>? headers, Dio? dio}) {
  var options = BaseOptions(headers: headers, baseUrl: baseUrl ?? '');
  var _dio = dio ?? Dio(options);

  _dio.interceptors.add(InterceptorsWrapper(onRequest: (options, handler) {
    final authToken = locator<HiveService>().getAuthToken();
    if (authToken != null) {
      options.headers["Authorization"] = "Bearer $authToken";
    }
    return handler.next(options);
  }));

  if (kDebugMode && NEED_PROXY) {
    (_dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate = (client) {
      client.findProxy = (url) {
        return Platform.isAndroid ? 'PROXY 10.0.2.2:9090' : 'PROXY localhost:9090';
      };
    };
  }

  return _dio;
}

extension DioErrorExt on DioError {
  String withResponse() {
    return "${toString()}\nResponse: ${response.toString()}";
  }
}
