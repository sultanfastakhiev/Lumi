import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class Header extends StatelessWidget {
  final String text;

  const Header(this.text, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Container(
        padding: const EdgeInsets.only(bottom: 12, top: 4),
        decoration: BoxDecoration(
          border: Border(
            bottom: BorderSide(color: graySwatch.shade200),
          ),
        ),
        child: Row(
          children: [
            GestureDetector(
              onTap: () => AutoRouter.of(context).pop(),
              child: Padding(
                padding: const EdgeInsets.only(right: 8),
                child: Icon(
                  FeatherIcons.arrowLeft,
                  size: 24,
                  color: Theme.of(context).primaryColor,
                ),
              ),
            ),
            Text(
              text,
              style: TextStyles.textLgMedium.apply(color: graySwatch.shade800),
            )
          ],
        ),
      ),
    );
  }
}
