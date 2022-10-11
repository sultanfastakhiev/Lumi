import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class PageSubtitle extends StatelessWidget {
  final TextAlign textAlign;
  final String text;

  const PageSubtitle(this.text, {Key? key, this.textAlign = TextAlign.start}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      textAlign: textAlign,
      style: TextStyles.textMdNormal.apply(color: graySwatch.shade500),
    );
  }
}
