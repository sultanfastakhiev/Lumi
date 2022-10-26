import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/feats/diagnosis/entities/kidney_prediction/kidney_prediction.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/loggy.dart';

class PredictKidneyDiseasesEndpoint with ApiLoggy {
  late final Dio _dio;

  PredictKidneyDiseasesEndpoint({Dio? dio}) {
    _dio = locator<Dio>();
  }

  Future<Either<Failure, List<KidneyPrediction>>> call(File file) async {
    try {
      final response = await _dio.post(
        "/test",
        data: FormData.fromMap({
          "file": await MultipartFile.fromFile(file.path),
        }),
      );

      if (response.statusCode == 401) return const Left(InvalidCredentials());
      if (response.statusCode != 200) {
        loggy.error("Failed to predict kidney diseases\n$response");
        return const Left(FailedToPredict());
      }

      final Map<String, dynamic> data = response.data;

      final predictions = [
        KidneyPrediction(label: "Киста", probability: data["cyst"] / 100.0),
        KidneyPrediction(label: "Здоров", probability: data["normal"] / 100.0),
        KidneyPrediction(label: "Камень", probability: data["stone"] / 100.0),
        KidneyPrediction(label: "Опухоль", probability: data["tumor"] / 100.0),
      ];

      predictions.sort((a, b) => b.probability.compareTo(a.probability));

      return Right(predictions);
    } on DioError catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to predict kidney diseases\n${e.response}", e, stackTrace);
      return const Left(CantAccessOurServices());
    } catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to predict kidney diseases", e, stackTrace);
      return const Left(CantAccessOurServices());
    }
  }
}
