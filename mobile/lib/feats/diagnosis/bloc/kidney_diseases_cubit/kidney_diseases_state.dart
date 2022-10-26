part of 'kidney_diseases_cubit.dart';

abstract class KidneyDiseasesState extends Equatable {
  const KidneyDiseasesState();
}

class WaitingForFileKidneyDiseasesState extends KidneyDiseasesState {
  @override
  List<Object> get props => [];
}

abstract class KidneyDiseasesStateWithFile extends KidneyDiseasesState {
  final File file;

  const KidneyDiseasesStateWithFile(this.file);
}

class FileUploadedKidneyDiseasesState extends KidneyDiseasesStateWithFile {
  const FileUploadedKidneyDiseasesState(File file) : super(file);

  @override
  List<Object> get props => [file];
}

class FetchingPredictionsKidneyDiseasesState extends KidneyDiseasesStateWithFile {
  const FetchingPredictionsKidneyDiseasesState(File file) : super(file);

  @override
  List<Object> get props => [file];
}

class PredictedKidneyDiseasesState extends KidneyDiseasesStateWithFile {
  final List<KidneyPrediction> predictions;

  const PredictedKidneyDiseasesState(File file, this.predictions) : super(file);

  @override
  List<Object> get props => [file, predictions];
}
