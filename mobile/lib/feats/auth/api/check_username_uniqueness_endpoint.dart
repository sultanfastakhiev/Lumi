import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/loggy.dart';

class CheckUsernameUniqueness with ApiLoggy {
  late final Dio _dio;

  CheckUsernameUniqueness({Dio? dio}) {
    _dio = locator<Dio>();
  }

  Future<Either<Failure, bool>> call(String username) async {
    try {
      final response = await _dio.post("/check_username", data: {
        "username": username,
      }).catchError((err) => err.response);

      if (response.statusCode != 200) return const Left(InvalidCredentials());
      if (response.data["answer"] == null) return const Left(CantAccessOurServices());

      return Right(response.data["answer"]);
    } on DioError catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to check username uniqueness\n${e.response}", e, stackTrace);
      return const Left(CantAccessOurServices());
    } catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to check username uniqueness", e, stackTrace);
      return const Left(CantAccessOurServices());
    }
  }
}
