import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class DiagnosisListCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final Widget icon;
  final PageRouteInfo route;

  const DiagnosisListCard({
    Key? key,
    required this.title,
    required this.subtitle,
    required this.icon,
    required this.route,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: graySwatch.shade300, width: 1),
          borderRadius: BorderRadius.circular(8),
        ),
        child: Material(
          color: Colors.transparent,
          borderRadius: BorderRadius.circular(8),
          child: InkWell(
            borderRadius: BorderRadius.circular(8),
            onTap: () => AutoRouter.of(context).push(route),
            child: Padding(
              padding: const EdgeInsets.all(10),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Header
                  Row(
                    children: [
                      SizedBox(
                        height: 24,
                        width: 24,
                        child: icon,
                      ),
                      const SizedBox(width: 10),
                      Text(
                        title,
                        style: TextStyles.textMdMedium.apply(color: graySwatch.shade700),
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  Text(
                    subtitle,
                    style: TextStyles.textSmNormal.apply(color: graySwatch.shade500),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
