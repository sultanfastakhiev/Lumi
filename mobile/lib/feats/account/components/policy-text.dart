import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class PrivacyTitle extends StatelessWidget {
  final String text;

  const PrivacyTitle(this.text, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Text(
        text,
        style: TextStyles.textMdMedium.apply(color: graySwatch.shade700),
      ),
    );
  }
}

class PrivacyContent extends StatelessWidget {
  final String text;

  const PrivacyContent(this.text, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Text(
        text,
        style: TextStyles.textMdNormal.apply(color: graySwatch.shade700),
      ),
    );
  }
}
