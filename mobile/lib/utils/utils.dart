import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';

void showError(BuildContext context, String error) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      content: Text(
        error,
        style: TextStyles.textMdMedium.apply(color: Colors.white),
      ),
      backgroundColor: const Color(0xFFD92D20),
    ),
  );
}
