import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class LinkButton extends StatelessWidget {
  final String text;
  final void Function() onTap;

  const LinkButton({
    Key? key,
    required this.text,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        GestureDetector(
          child: Text(
            text,
            style: TextStyles.textSmMedium.apply(color: primarySwatch.shade700),
          ),
        ),
        Positioned(
          top: -10,
          bottom: -10,
          left: -10,
          right: -10,
          child: InkWell(
            canRequestFocus: false,
            focusColor: Colors.transparent,
            splashColor: Colors.transparent,
            onTap: onTap,
            child: const SizedBox.expand(),
          ),
        ),
      ],
    );
  }
}
