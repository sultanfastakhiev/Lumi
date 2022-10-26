import 'dart:io';

import 'package:flutter/material.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/image_preview.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/components/prediction.dart';
import 'package:mobile/feats/diagnosis/entities/kidney_prediction/kidney_prediction.dart';

class KidneyDiseasesResultsScreen extends StatelessWidget {
  final File image;
  final List<KidneyPrediction> predictions;

  const KidneyDiseasesResultsScreen({
    Key? key,
    required this.image,
    required this.predictions,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: ListView(
        children: [
          const Header("Результаты диагностики"),
          const SizedBox(height: 16),
          ImagePreview(image),
          const SizedBox(height: 24),
          ...predictions.map(
            (prediction) => Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: Prediction(
                label: prediction.label,
                value: prediction.probability,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
