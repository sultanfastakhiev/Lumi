import 'package:auto_route/auto_route.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
import 'package:intl/intl.dart';
import 'package:loggy/loggy.dart';
import 'package:mobile/feats/auth/bloc/user_cubit/user_cubit.dart';
import 'package:mobile/feats/main/bloc/patients_list_cubit/patients_list_cubit.dart';
import 'package:mobile/global_variables.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/router/router.gr.dart';
import 'package:mobile/utils/loggy.dart';
import 'package:mobile/utils/theme/theme.dart';
import 'package:path_provider/path_provider.dart';
import 'package:sentry_flutter/sentry_flutter.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  setupLocator();
  Loggy.initLoggy(logPrinter: kReleaseMode ? const SentryPrinter() : const PrettyPrinter());
  logger = Loggy("Global");

  final storage = await HydratedStorage.build(storageDirectory: await getTemporaryDirectory());

  Intl.defaultLocale = "ru-RU";

  HydratedBlocOverrides.runZoned(
    () async {
      if (kReleaseMode) {
        await SentryFlutter.init(
          (options) {
            options.dsn = SENTRY_DNS;
          },
          // Init your App.
          appRunner: () => runApp(const MyApp()),
        );
      } else {
        runApp(const MyApp());
      }
    },
    storage: storage,
  );
}

final _appRouter = AppRouter();

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // change status bar brightness
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.dark);

    return MultiBlocProvider(
      providers: [
        BlocProvider(create: (context) => UserCubit()),
        BlocProvider(create: (context) => PatientsListCubit()),
      ],
      child: MaterialApp.router(
        title: 'Lumi',
        localizationsDelegates: const [
          GlobalMaterialLocalizations.delegate,
          GlobalCupertinoLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
        ],
        supportedLocales: const [
          Locale('ru', 'RU'),
          Locale('en', 'US'),
        ],
        locale: const Locale('ru', 'RU'),
        debugShowCheckedModeBanner: false,
        theme: lightTheme,
        routerDelegate: AutoRouterDelegate(
          _appRouter,
          navigatorObservers: () => [SentryNavigatorObserver()],
        ),
        routeInformationParser: _appRouter.defaultRouteParser(),
      ),
    );
  }
}
