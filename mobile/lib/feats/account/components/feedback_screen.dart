import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';
import 'package:url_launcher/url_launcher.dart';

class FeedbackScreen extends StatelessWidget {
  const FeedbackScreen({Key? key}) : super(key: key);

  void handleEmailTap() {
    launchUrl(Uri.parse("mailto:feedback@lumi.zotov.dev")).catchError(print);
  }

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: ListView(
        children: [
          const Header("Обратная связь"),
          const SizedBox(height: 16),

          SelectableText.rich(
            TextSpan(
              children: [
                TextSpan(
                  text: "Для обратной связи вы можете написать нам на email ",
                  style: TextStyles.textMdNormal.apply(color: graySwatch.shade500),
                ),
                TextSpan(
                  text: "feedback@lumi.ru",
                  recognizer: TapGestureRecognizer()..onTap = handleEmailTap,
                  style: TextStyles.textMdMedium.apply(color: primarySwatch.shade600),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
