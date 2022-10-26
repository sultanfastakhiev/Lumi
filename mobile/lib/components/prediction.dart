import 'package:flutter/material.dart';
import 'package:mobile/components/progress_bar.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class PredictionWidget extends StatelessWidget {
  final String label;
  final double value;

  const PredictionWidget({
    Key? key,
    required this.label,
    required this.value,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: TextStyles.textSmMedium.apply(color: graySwatch.shade700),
        ),
        ProgressBar(value),
      ],
    );
  }
}
