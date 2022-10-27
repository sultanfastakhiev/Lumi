import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class MenuTile extends StatelessWidget {
  final IconData icon;
  final String text;
  final void Function() onTap;

  const MenuTile({
    Key? key,
    required this.icon,
    required this.text,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
          child: Row(
            children: [
              Icon(icon, size: 26, color: primarySwatch.shade500),
              const SizedBox(width: 10),
              Text(
                text,
                style: TextStyles.textMdMedium.apply(color: graySwatch.shade600),
              )
            ],
          ),
        ),
      ),
    );
  }
}
