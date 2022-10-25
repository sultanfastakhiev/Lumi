import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/components/typography/page_title.dart';
import 'package:mobile/feats/diagnosis/components/diagnosis_list_card.dart';
import 'package:mobile/router/router.gr.dart';
import 'package:mobile/utils/theme/theme.dart';

class DiagnosisListScreen extends StatefulWidget {
  const DiagnosisListScreen({Key? key}) : super(key: key);

  @override
  State<DiagnosisListScreen> createState() => _DiagnosisListScreenState();
}

class _DiagnosisListScreenState extends State<DiagnosisListScreen> {
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        const SizedBox(height: 12),
        const PageTitle("Диагностика"),
        const SizedBox(height: 24),
        DiagnosisListCard(
          route: const KidneyDiseasesScreenRoute(),
          icon: SvgPicture.asset("assets/icons/kidney.svg", color: primarySwatch.shade600),
          title: "Опухоли почек",
          subtitle: "Автоматическая диагностика опасных почечных новобразований по КТ почек",
        ),
        const SizedBox(height: 18),
        DiagnosisListCard(
          route: const AnalyzesDecodingScreenRoute(),
          icon: Icon(FeatherIcons.file, color: primarySwatch.shade600),
          title: "Расшифровка анализов",
          subtitle: "Выявление различных сердечно-сосудистых заболеваний по анализам ",
        ),
        const SizedBox(height: 18),
        DiagnosisListCard(
          route: const SkinCancerScreenRoute(),
          icon: Icon(FeatherIcons.droplet, color: primarySwatch.shade600),
          title: "Рак кожи",
          subtitle: "Определение мелономы по фотографии",
        ),
        const SizedBox(height: 18),
        DiagnosisListCard(
          route: const BrainTumorsScreenRoute(),
          icon: SvgPicture.asset("assets/icons/brain.svg", color: primarySwatch.shade600),
          title: "Опухоли мозга",
          subtitle: "Автоматическая диагностика рака по МРТ головного мозга",
        ),
      ],
    );
  }
}
