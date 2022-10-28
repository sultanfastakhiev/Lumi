import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/feats/account/components/app_version.dart';
import 'package:mobile/feats/account/components/secondary_menu_tile.dart';

class AboutAppScreen extends StatelessWidget {
  const AboutAppScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      padding: EdgeInsets.zero,
      child: SingleChildScrollView(
        child: Column(
          children: [
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 16),
              child: Header("О приложение"),
            ),
            const SizedBox(height: 36),
            SvgPicture.asset(
              "assets/icons/logo.svg",
              width: 90,
              height: 90,
              fit: BoxFit.fill,
            ),
            const SizedBox(height: 12),
            const AppVersion(),
            const SizedBox(height: 24),
            SecondaryMenuTile(
              text: "Обратная связь",
              onTap: () {},
            ),
            SecondaryMenuTile(
              text: "Оценить приложение",
              onTap: () {},
            ),
            SecondaryMenuTile(
              text: "Политика конфиденциальности",
              onTap: () {},
            ),
            SecondaryMenuTile(
              text: "Пользовательское соглашение",
              onTap: () {},
            ),
          ],
        ),
      ),
    );
  }
}

