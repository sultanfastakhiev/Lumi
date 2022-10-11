import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/loggy.dart';

class LoginUserEndpoint with ApiLoggy {
  late final Dio _dio;

  LoginUserEndpoint({Dio? dio}) {
    _dio = locator<Dio>();
  }

  Future<Either<Failure, String>> call(String username, String password) async {
    try {
      final response = await _dio.post("/", data: {
        "username": username,
        "password_hash": password,
      }).catchError((err) => err.response);

      if (response.statusCode != 200) return const Left(InvalidCredentials());
      if (response.data["access_token"] == null) return const Left(CantAccessOurServices());

      final token = response.data["access_token"];

      return Right(token);
    } on DioError catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to login\n${e.response}", e, stackTrace);
      return const Left(CantAccessOurServices());
    } catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to login", e, stackTrace);
      return const Left(CantAccessOurServices());
    }
  }
}
