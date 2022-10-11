import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/formatters.dart';
import 'package:mobile/utils/loggy.dart';
import 'package:mobile/feats/auth/entities/user/user.dart';

class SignupUserEndpoint with ApiLoggy {
  late final Dio _dio;

  SignupUserEndpoint({Dio? dio}) {
    _dio = locator<Dio>();
  }

  Future<Either<Failure, User>> call({
    required String email,
    required String password,
    required String name,
    required String lastName,
    required String patronymic,
    required DateTime dateOfBirth,
  }) async {
    try {
      final response = await _dio.post("/reg", data: {
        "last_name": lastName,
        "name": name,
        "patronymic": patronymic,
        "birthday": DateFormatters.formatToBirthday(dateOfBirth),
        "username": email,
        "password_hash": password,
      }).catchError((err) => err.response);

      if (response.data == "User created") {
        final user = User(
          patronymic: patronymic,
          lastName: lastName,
          id: "",
          name: name,
          birthday: dateOfBirth,
          username: email,
        );
        return Right(user);
      }

      if (response.data["detail"] == "User already exists") {
        return const Left(EmailAlreadyTaken());
      }

      return const Left(FailedToCreateUser());
    } on DioError catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to create user\n${e.response}", e, stackTrace);
      return const Left(CantAccessOurServices());
    } catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to create user", e, stackTrace);
      return const Left(CantAccessOurServices());
    }
  }
}
