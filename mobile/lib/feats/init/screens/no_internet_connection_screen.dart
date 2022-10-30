import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:mobile/components/button/primary.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class NoInternetConnectionScreen extends StatelessWidget {
  final void Function() onRefresh;

  const NoInternetConnectionScreen({Key? key, required this.onRefresh}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              FeatherIcons.cloudOff,
              size: 42,
              color: Theme.of(context).primaryColor,
            ),
            const SizedBox(height: 24),
            Text(
              "Нет доступа к интернету",
              style: TextStyles.textMdMedium.apply(color: graySwatch.shade900),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 4),
            Text(
              "Нам требуется доступ к интернету\nдля работы приложения",
              style: TextStyles.textSmNormal.apply(color: graySwatch.shade400),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 12),
            PrimaryButton(
              text: "Повторить попытку",
              onTap: onRefresh,
            ),
          ],
        ),
      ),
    );
  }
}
