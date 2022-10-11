import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:mobile/components/loading/loading_screen.dart';
import 'package:mobile/feats/auth/bloc/user_cubit/user_cubit.dart';
import 'package:mobile/router/router.gr.dart';
import 'package:mobile/services/hive_service.dart';

class InitScreen extends StatefulWidget {
  const InitScreen({Key? key}) : super(key: key);

  @override
  State<InitScreen> createState() => _InitScreenState();
}

class _InitScreenState extends State<InitScreen> {
  Future load() async {
    final userCubit = context.read<UserCubit>();
    await Hive.initFlutter();

    // open boxes
    await Future.wait([
      Hive.openBox(HiveBoxes.auth),
    ]);

    userCubit.getMe();

    // debug
    // locator<HiveService>().putAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhZWY1MjJiLTdlZWYtNDlhMC1iNDE3LWZlYjg1MDk3OWQ2ZiIsInVzZXJuYW1lIjoiem90b3Z5IiwicGFzc3dvcmRfaGFzaCI6IiQyYiQxMiRvSnc2ZnkvaTR6dnFUdC5rTGNUamQuZkcuUVFFcmg2YjFmUG9Ba1ZlbUxoNlkzZXo5N3BKSyJ9.0V8sVZHtr9WDpFrqisw2PDP4BpShnqbyCin6ECXFiFM");
    // userCubit.emit(AuthorizedState(
    //     user: User(
    //       username: "zotovy",
    //       patronymic: "sergeevich",
    //       birthday: DateTime(2005, 21, 11),
    //       lastName: "zotov",
    //       name: "yaroslav",
    //       id: "123",
    //     ),
    //     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhZWY1MjJiLTdlZWYtNDlhMC1iNDE3LWZlYjg1MDk3OWQ2ZiIsInVzZXJuYW1lIjoiem90b3Z5IiwicGFzc3dvcmRfaGFzaCI6IiQyYiQxMiRvSnc2ZnkvaTR6dnFUdC5rTGNUamQuZkcuUVFFcmg2YjFmUG9Ba1ZlbUxoNlkzZXo5N3BKSyJ9.0V8sVZHtr9WDpFrqisw2PDP4BpShnqbyCin6ECXFiFM"
    // ));
    userCubit.emit(NotAuthorizedState());

    final userState = context.read<UserCubit>().state;
    if (userState is AuthorizedState) {
      AutoRouter.of(context).push(const MainScreenRoute());
    } else {
      print('push');
      AutoRouter.of(context).push(const LoginScreenRoute());
    }
  }

  late Future future;

  @override
  void initState() {
    super.initState();
    future = load();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: future,
      builder: (context, snapshot) {
        return const LoadingScreen();
      },
    );
  }
}
