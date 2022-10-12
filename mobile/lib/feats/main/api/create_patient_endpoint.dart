import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/formatters.dart';
import 'package:mobile/utils/loggy.dart';

class CreatePatientEndpoint with ApiLoggy {
  late final Dio _dio;

  CreatePatientEndpoint({Dio? dio}) {
    _dio = locator<Dio>();
  }

  Future<Either<Failure, void>> call({
    required String name,
    required String lastName,
    required String patronymic,
    required DateTime birthday,
    required String doctorId,
  }) async {
    try {
      final response = await _dio.post(
        "/patients/create_patient",
        data: {
          "last_name": lastName,
          "name": name,
          "patronymic": patronymic,
          "birthday": DateFormatters.formatToBirthday(birthday),
          "doctor": doctorId,
        },
      );

      if (response.statusCode == 401) return const Left(InvalidCredentials());
      if (response.statusCode != 200) {
          loggy.error("Failed to create patient\n$response");
          return const Left(FailedToCreatePatient());
      }

      return const Right(null);
    } on DioError catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to create patient\n${e.response}", e, stackTrace);
      return const Left(CantAccessOurServices());
    } catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to create patient", e, stackTrace);
      return const Left(CantAccessOurServices());
    }
  }
}
