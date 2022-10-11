import 'package:equatable/equatable.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
import 'package:mobile/feats/auth/api/get_me_endpoint.dart';
import 'package:mobile/feats/auth/api/login_user_endpoint.dart';
import 'package:mobile/feats/auth/api/signup_user_endpoint.dart';
import 'package:mobile/feats/auth/entities/user/user.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/services/hive_service.dart';
import 'package:mobile/utils/failure.dart';
import 'package:mobile/utils/loggy.dart';

part 'user_state.dart';

class UserCubit extends HydratedCubit<UserState> with BlocLoggy {
  late final GetMeEndpoint _getMeEndpoint;
  late final HiveService _hiveService;
  late final LoginUserEndpoint _loginUserEndpoint;
  late final SignupUserEndpoint _signupUserEndpoint;

  UserCubit() : super(LoadingUserState()) {
    _getMeEndpoint = locator<GetMeEndpoint>();
    _hiveService = locator<HiveService>();
    _loginUserEndpoint = locator<LoginUserEndpoint>();
    _signupUserEndpoint = locator<SignupUserEndpoint>();
  }

  Future<void> getMe() async {
    final token = _hiveService.getAuthToken();

    if (token == null) {
      loggy.info("Impossible to fetch user. Auth token not found");
      return;
    }

    final either = await _getMeEndpoint();
    either.fold(
      (failure) => emit(NotAuthorizedState()),
      (user) {
        emit(AuthorizedState(user: user, token: token));
      },
    );
  }

  Future<Failure?> login(String email, String password) async {
    final either = await _loginUserEndpoint(email, password);
    return either.fold(
      (failure) => failure,
      (token) {
        _hiveService.putAuthToken(token);
        getMe();
        return null;
      },
    );
  }

  Future<Failure?> signup({
    required String email,
    required String password,
    required String name,
    required String lastName,
    required String patronymic,
    required DateTime dateOfBirth,
  }) async {
    final either = await _signupUserEndpoint(
      email: email,
      password: password,
      name: name,
      lastName: lastName,
      patronymic: patronymic,
      dateOfBirth: dateOfBirth,
    );
    return either.fold(
      (failure) => failure,
      (_) async {
        final loginEither = await _loginUserEndpoint(email, password);
        return loginEither.fold(
          (failure) => failure,
          (token) async {
            _hiveService.putAuthToken(token);
            await getMe();
            return null;
          },
        );
      },
    );
  }

  @override
  UserState? fromJson(Map<String, dynamic> json) {
    if (json["type"] == "user/authorized") return AuthorizedState.fromJson(json);
    return null;
  }

  @override
  Map<String, dynamic>? toJson(UserState state) {
    if (state is AuthorizedState) return state.toJson();
    if (state is NotAuthorizedState) return state.toJson();
    return null;
  }
}
