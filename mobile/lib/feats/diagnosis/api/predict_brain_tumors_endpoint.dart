import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/feats/diagnosis/api/base_predict_endpoint.dart';
import 'package:mobile/feats/diagnosis/entities/prediction/prediction.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/loggy.dart';

const translate = {
  "glioma": "Глиома",
  "meningioma": "Менингиома",
  "no tumor": "Здоров",
  "p tumor": "Гипофизная опухоль",
};

class PredictBrainTumorsEndpoint extends BasePredictEndpoint with ApiLoggy {
  late final Dio _dio;

  PredictBrainTumorsEndpoint({Dio? dio}) {
    _dio = locator<Dio>();
  }

  @override
  Future<Either<Failure, List<Prediction>>> call(File file) async {
    try {
      final response = await _dio.post(
        "/brain",
        data: FormData.fromMap({
          "file_mel": await MultipartFile.fromFile(file.path),
        }),
      );

      if (response.statusCode == 401) return const Left(InvalidCredentials());
      if (response.statusCode != 200) {
        loggy.error("Failed to predict brain tumors\n$response");
        return const Left(FailedToPredict());
      }

      final Map<String, dynamic> data = response.data;

      final predictions = (data["Predict"] as List)
          .cast<Map<String, dynamic>>()
          .map(
            (json) => Prediction(
              label: translate[json["title"]]!,
              probability: json["value"] / 100.0,
            ),
          )
          .toList();

      predictions.sort((a, b) => b.probability.compareTo(a.probability));

      return Right(predictions);
    } on DioError catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to predict brain tumors\n${e.response}", e, stackTrace);
      return const Left(CantAccessOurServices());
    } catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to predict brain tumors", e, stackTrace);
      return const Left(CantAccessOurServices());
    }
  }
}
