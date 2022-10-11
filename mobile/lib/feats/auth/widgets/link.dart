import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:mobile/components/button/link.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class AuthLink extends StatelessWidget {
  final String text;
  final String linkText;
  final PageRouteInfo route;

  const AuthLink({
    Key? key,
    required this.text,
    required this.linkText,
    required this.route,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          "$text ",
          style: TextStyles.textSmNormal.apply(color: graySwatch.shade500),
        ),
        LinkButton(text: linkText, onTap: () => AutoRouter.of(context).push(route)),
      ],
    );
  }
}
