import 'package:get_it/get_it.dart';
import 'package:mobile/feats/auth/api/get_me_endpoint.dart';
import 'package:mobile/feats/auth/api/login_user_endpoint.dart';
import 'package:mobile/feats/auth/api/signup_user_endpoint.dart';
import 'package:mobile/feats/main/api/create_patient_endpoint.dart';
import 'package:mobile/feats/main/api/get_patients_endpoint.dart';
import 'package:mobile/global_variables.dart';
import 'package:mobile/services/hive_service.dart';
import 'package:mobile/utils/http_client_factory.dart';

GetIt locator = GetIt.instance;

void setupLocator() {
  locator.registerLazySingleton(() => createHttpClient(baseUrl: API_URL));
  locator.registerLazySingleton(() => GetMeEndpoint());
  locator.registerLazySingleton(() => HiveService());
  locator.registerLazySingleton(() => LoginUserEndpoint());
  locator.registerLazySingleton(() => SignupUserEndpoint());
  locator.registerLazySingleton(() => GetPatientsEndpoint());
  locator.registerLazySingleton(() => CreatePatientEndpoint());
}
