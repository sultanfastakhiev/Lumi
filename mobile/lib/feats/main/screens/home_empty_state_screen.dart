import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:mobile/components/button/primary.dart';
import 'package:mobile/router/router.gr.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class HomeEmptyState extends StatelessWidget {
  const HomeEmptyState({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            FeatherIcons.search,
            size: 42,
            color: Theme.of(context).primaryColor,
          ),
          const SizedBox(height: 24),
          Text(
            "Пациентов не найдено",
            style: TextStyles.textMdMedium.apply(color: graySwatch.shade900),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 4),
          Text(
            "Нажмите на кнопку чтобы создать\nвашего первого пациента",
            style: TextStyles.textSmNormal.apply(color: graySwatch.shade400),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 12),
          PrimaryButton(
            text: "Создать пациента",
            onTap: () => AutoRouter.of(context).push(const CreatePatientScreenRoute()),
          ),
        ],
      ),
    );
  }
}
