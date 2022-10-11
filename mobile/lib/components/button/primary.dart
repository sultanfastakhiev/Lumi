import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';

class PrimaryButton extends StatelessWidget {
  final String text;
  final void Function() onTap;

  const PrimaryButton({
    Key? key,
    required this.text,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Theme.of(context).primaryColor,
      borderRadius: BorderRadius.circular(8),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(8),
        child: Container(
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8),
          ),
          child: Center(
            child: Text(
              text,
              style: TextStyles.textMdMedium.apply(color: Colors.white),
            ),
          ),
        ),
      ),
    );
  }
}
