import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/feats/entities/patient/patient.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/loggy.dart';

class GetPatientsEndpoint with ApiLoggy {
  late final Dio _dio;

  GetPatientsEndpoint({Dio? dio}) {
    _dio = locator<Dio>();
  }

  Future<Either<Failure, List<Patient>>> call() async {
    try {
      final response = await _dio.get("/patients");

      if (response.statusCode == 401) return const Left(InvalidCredentials());

      final patients = (response.data["result"] as List)
          .cast<Map<String, dynamic>>()
          .map((json) => Patient.fromJson(json))
          .toList();

      return Right(patients);
    } on DioError catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to fetch patients\n${e.response}", e, stackTrace);
      return const Left(CantAccessOurServices());
    } catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to fetch patients", e, stackTrace);
      return const Left(CantAccessOurServices());
    }
  }
}
