import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:in_app_review/in_app_review.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/feats/account/components/app_version.dart';
import 'package:mobile/feats/account/components/secondary_menu_tile.dart';
import 'package:mobile/router/router.gr.dart';
import 'package:mobile/utils/utils.dart';

class AboutAppScreen extends StatelessWidget {
  const AboutAppScreen({Key? key}) : super(key: key);

  Future<void> reviewApp(BuildContext context) async {
    if (await InAppReview.instance.isAvailable()) {
      InAppReview.instance.requestReview();
    } else {
      showError(context, "In app review не доступно на данном устройстве");
    }
  }

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
              onTap: () => AutoRouter.of(context).push(const FeedbackScreenRoute()),
            ),
            SecondaryMenuTile(
              text: "Оценить приложение",
              onTap: () => reviewApp(context),
            ),
            SecondaryMenuTile(
              text: "Политика конфиденциальности",
              onTap: () => AutoRouter.of(context).push(const PrivacyPolicyScreenRoute()),
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

