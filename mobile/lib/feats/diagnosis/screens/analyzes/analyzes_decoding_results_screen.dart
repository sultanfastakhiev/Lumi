
import 'package:flutter/material.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/feats/diagnosis/components/analyzes_prediction.dart';
import 'package:mobile/feats/diagnosis/entities/prediction/prediction.dart';

class DecipherAnalysesResultsScreen extends StatelessWidget {
  final List<Prediction> predictions;

  const DecipherAnalysesResultsScreen({
    Key? key,
    required this.predictions,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: ListView(
        children: [
          const Header("Результаты диагностики"),
          const SizedBox(height: 16),
          ...predictions.map(
                (prediction) => Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: AnalyzesPrediction(prediction),
            ),
          ),
        ],
      ),
    );
  }
}
