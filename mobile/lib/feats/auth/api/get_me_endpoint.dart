import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/feats/auth/entities/user/user.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/loggy.dart';

class GetMeEndpoint with ApiLoggy {
  late final Dio _dio;

  GetMeEndpoint({Dio? dio}) {
    _dio = locator<Dio>();
  }

  Future<Either<Failure, User>> call() async {
    try {
      final response = await _dio.get("/me");

      if (response.statusCode == 401) return const Left(InvalidCredentials());
      if (response.statusCode != 200) return const Left(CantAccessOurServices());

      final user = User.fromJson(response.data);

      return Right(user);
    } on DioError catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to get me\n${e.response}", e, stackTrace);
      return const Left(CantAccessOurServices());
    } catch (e, stackTrace) {
      loggy.debug(e);
      loggy.error("Failed to get me", e, stackTrace);
      return const Left(CantAccessOurServices());
    }
  }
}
