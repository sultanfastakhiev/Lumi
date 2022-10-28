import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class SecondaryMenuTile extends StatelessWidget {
  final String text;
  final void Function() onTap;

  const SecondaryMenuTile({
    Key? key,
    required this.text,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            child: Text(
              text,
              style: TextStyles.textSmNormal.apply(color: graySwatch.shade700),
            ),
          ),
        ),
      ),
    );
  }
}
