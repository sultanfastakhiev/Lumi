import 'package:auto_route/auto_route.dart';
import 'package:mobile/feats/auth/screens/login_screen.dart';
import 'package:mobile/feats/auth/screens/signup_screen.dart';
import 'package:mobile/feats/init/screen/init_screen.dart';
import 'package:mobile/feats/main/screens/main_screen.dart';

@CupertinoAutoRouter(
  routes: [
    AutoRoute(page: InitScreen, initial: true),
    AutoRoute(page: LoginScreen),
    AutoRoute(page: SignupScreen),
    AutoRoute(page: MainScreen),
  ],
)
class $AppRouter {}