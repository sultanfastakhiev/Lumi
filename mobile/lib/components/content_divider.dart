import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/theme.dart';

class ContentDivider extends StatelessWidget {
  final EdgeInsets padding;

  const ContentDivider({
    Key? key,
    this.padding = const EdgeInsets.symmetric(horizontal: 16),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding,
      child: Divider(
        height: 1,
        color: graySwatch.shade300,
      ),
    );
  }
}
