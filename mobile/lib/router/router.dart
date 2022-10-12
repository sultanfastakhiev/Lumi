import 'package:auto_route/auto_route.dart';
import 'package:mobile/feats/auth/screens/login_screen.dart';
import 'package:mobile/feats/auth/screens/signup_screen_stage_1.dart';
import 'package:mobile/feats/auth/screens/signup_screen_stage_2.dart';
import 'package:mobile/feats/init/screen/init_screen.dart';
import 'package:mobile/feats/main/screens/create_patient_screen.dart';
import 'package:mobile/feats/main/screens/main_screen.dart';
import 'package:mobile/feats/main/screens/user_detail_screen.dart';

@CupertinoAutoRouter(
  routes: [
    AutoRoute(page: InitScreen, initial: true),
    AutoRoute(page: LoginScreen),
    AutoRoute(page: FirstStageSignupScreen),
    AutoRoute(page: SecondStageSignupScreen),
    AutoRoute(page: MainScreen),
    AutoRoute(page: CreatePatientScreen),
    AutoRoute(page: UserDetailScreen),
  ],
)
class $AppRouter {}