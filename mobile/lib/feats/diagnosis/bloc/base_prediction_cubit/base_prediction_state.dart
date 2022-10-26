part of 'base_prediction_cubit.dart';

abstract class BasePredictionState extends Equatable {
  const BasePredictionState();
}

class WaitingForFileBasePredictionState extends BasePredictionState {
  @override
  List<Object> get props => [];
}

abstract class BasePredictionStateWithFile extends BasePredictionState {
  final File file;

  const BasePredictionStateWithFile(this.file);
}

class FileUploadedBasePredictionState extends BasePredictionStateWithFile {
  const FileUploadedBasePredictionState(File file) : super(file);

  @override
  List<Object> get props => [file];
}

class FetchingPredictionsBasePredictionState extends BasePredictionStateWithFile {
  const FetchingPredictionsBasePredictionState(File file) : super(file);

  @override
  List<Object> get props => [file];
}

class PredictedBasePredictionState extends BasePredictionStateWithFile {
  final List<Prediction> predictions;

  const PredictedBasePredictionState(File file, this.predictions) : super(file);

  @override
  List<Object> get props => [file, predictions];
}
