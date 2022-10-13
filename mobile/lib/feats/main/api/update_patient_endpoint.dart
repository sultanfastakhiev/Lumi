import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/feats/entities/patient/patient.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/loggy.dart';

class UpdatePatientEndpoint with ApiLoggy {
  late final Dio _dio;

  UpdatePatientEndpoint({Dio? dio}) {
    _dio = locator<Dio>();
  }

  Future<Either<Failure, void>> call(Patient patient) async {
    try {
      final response = await _dio.patch(
        "/patients/${patient.id}",
        data: patient.toJson(),
      );

      if (response.statusCode == 401) return const Left(InvalidCredentials());
      if (response.statusCode != 200) {
        loggy.error("Failed to update patient\n$response");
        return const Left(FailedToCreatePatient());
      }

      return const Right(null);
    } on DioError catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to update patient\n${e.response}", e, stackTrace);
      return const Left(CantAccessOurServices());
    } catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to update patient", e, stackTrace);
      return const Left(CantAccessOurServices());
    }
  }
}
