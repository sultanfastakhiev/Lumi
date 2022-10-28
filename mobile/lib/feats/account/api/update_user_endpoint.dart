import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/feats/auth/entities/user/user.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/formatters.dart';
import 'package:mobile/utils/loggy.dart';

class UpdateUserEndpoint with ApiLoggy {
  late final Dio _dio;

  UpdateUserEndpoint({Dio? dio}) {
    _dio = locator<Dio>();
  }

  Future<Either<Failure, void>> call(User user, { String? password }) async {
    try {
      final data = {
        "username": user.username,
        "last_name": user.lastName,
        "name": user.name,
        "patronymic": user.patronymic,
        "birthday": DateFormatters.formatToBirthday(user.birthday),
      };

      if (password != null) data["password_hash"] = password;

      final response = await _dio.patch(
        "/me",
        data: data,
      ).catchError((err) => err.response);

      if (response.statusCode == 401) return const Left(InvalidCredentials());
      if (response.statusCode == 409 && response.data["detail"] == "Nickname is already in use") {
        loggy.warning("Username ${user.username} is already in use");
        return Left(UsernameUniqueFailure(user.username));
      }
      if (response.statusCode != 200) {
        loggy.error("Failed to update user\n$response");
        return const Left(FailedToCreatePatient());
      }

      return const Right(null);
    } on DioError catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to update user\n${e.response}", e, stackTrace);
      return const Left(CantAccessOurServices());
    } catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to update user", e, stackTrace);
      return const Left(CantAccessOurServices());
    }
  }
}
