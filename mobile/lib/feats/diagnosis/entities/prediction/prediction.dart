import 'package:freezed_annotation/freezed_annotation.dart';

part 'prediction.freezed.dart';

@freezed
abstract class Prediction with _$Prediction {
  const factory Prediction({
    required String label,
    required double probability,
  }) = _Prediction;
}