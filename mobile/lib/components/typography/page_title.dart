import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class PageTitle extends StatelessWidget {
  final TextAlign textAlign;
  final String text;
  final Widget? suffix;

  const PageTitle(
    this.text, {
    Key? key,
    this.textAlign = TextAlign.start,
    this.suffix,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textWidget = Text(
      text,
      textAlign: textAlign,
      style: TextStyles.displayXsSemibold.apply(color: graySwatch.shade800),
    );

    if (suffix == null) return textWidget;

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        textWidget,
        suffix!,
      ],
    );
  }
}
