import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';

class ErrorText extends StatelessWidget {
  final String text;

  const ErrorText(this.text, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyles.textMdMedium.apply(
        color: const Color(0xFFD92D20),
      ),
    );
  }
}
