import 'package:flutter/material.dart';
import 'package:mobile/components/progress_bar.dart';
import 'package:mobile/feats/diagnosis/entities/prediction/prediction.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class AnalyzesPrediction extends StatelessWidget {
  final Prediction prediction;

  const AnalyzesPrediction(this.prediction, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: graySwatch.shade300, width: 1),
        borderRadius: BorderRadius.circular(8),
      ),
      padding: const EdgeInsets.all(12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const _Label("Диагноз"),
          Text(
            prediction.label,
            style: TextStyles.textSmMedium.apply(color: graySwatch.shade700),
          ),
          const SizedBox(height: 18),
          const _Label("Вероятность"),
          ProgressBar(prediction.probability),
          if (prediction.pathologies != null) ...[
            const SizedBox(height: 18),
            const _Label("Паталогии"),
            ...prediction.pathologies!.map(
              (pathology) => Text(
                pathology,
                style: TextStyles.textSmNormal.apply(color: graySwatch.shade700),
              ),
            )
          ],
        ],
      ),
    );
  }
}

class _Label extends StatelessWidget {
  final String label;

  const _Label(this.label, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Text(
        label,
        style: TextStyles.textXsMedium.apply(color: graySwatch.shade400),
      ),
    );
  }
}
