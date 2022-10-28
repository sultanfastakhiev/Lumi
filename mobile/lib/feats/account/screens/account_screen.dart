import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:mobile/components/content_divider.dart';
import 'package:mobile/components/error/error_view.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/components/typography/page_title.dart';
import 'package:mobile/components/user_tile.dart';
import 'package:mobile/feats/account/components/menu_tile.dart';
import 'package:mobile/feats/auth/bloc/user_cubit/user_cubit.dart';
import 'package:mobile/feats/auth/entities/user/user.dart';
import 'package:mobile/router/router.gr.dart';
import 'package:mobile/utils/failure.dart';

class AccountScreen extends StatelessWidget {
  const AccountScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      padding: EdgeInsets.zero,
      child: Padding(
        padding: const EdgeInsets.only(top: 12.0),
        child: BlocSelector<UserCubit, UserState, User?>(
          selector: (state) => state is AuthorizedState ? state.user : null,
          builder: (context, user) {
            if (user == null) return ErrorView(const InvalidCredentials().message);

            return ListView(
              children: [
                const PageTitle("Аккаунт"),
                UserTile(
                  user,
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
                ),
                const ContentDivider(
                  padding: EdgeInsets.only(right: 16, left: 16, bottom: 8),
                ),
                 MenuTile(
                  icon: FeatherIcons.user,
                  text: "Профиль",
                  onTap: () => AutoRouter.of(context).push(const ProfileScreenRoute()),
                ),
                 MenuTile(
                  icon: FeatherIcons.lock,
                  text: "Пароль",
                  onTap: () {},
                ),
                 MenuTile(
                  icon: FeatherIcons.info,
                  text: "О приложение",
                  onTap: () {},
                ),
                 MenuTile(
                  icon: FeatherIcons.logOut,
                  text: "Выйти",
                  onTap: () {},
                )
              ],
            );
          },
        ),
      ),
    );
  }
}
