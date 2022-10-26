import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:mobile/feats/diagnosis/entities/prediction/prediction.dart';
import 'package:mobile/utils/failure.dart';

abstract class BasePredictEndpoint {
  Future<Either<Failure, List<Prediction>>> call(File file);
}