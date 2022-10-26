import 'package:freezed_annotation/freezed_annotation.dart';

part 'kidney_prediction.freezed.dart';

@freezed
abstract class KidneyPrediction with _$KidneyPrediction {
  const factory KidneyPrediction({
    required String label,
    required double probability,
  }) = _KidneyPrediction;
}