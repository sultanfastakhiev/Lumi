import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:image_picker/image_picker.dart';
import 'package:mobile/feats/diagnosis/api/base_predict_endpoint.dart';
import 'package:mobile/feats/diagnosis/entities/prediction/prediction.dart';
import 'package:mobile/utils/utils.dart';

part 'base_prediction_state.dart';

part 'kidney_diseases_selectors.dart';

class BasePredictionCubit extends Cubit<BasePredictionState> {
  final BasePredictEndpoint endpoint;
  final void Function(File file, List<Prediction> predictions) pushResultPage;

  BasePredictionCubit({
    required this.endpoint,
    required this.pushResultPage,
  }) : super(WaitingForFileBasePredictionState());

  void uploadFile(XFile file) {
    emit(FileUploadedBasePredictionState(File(file.path)));
  }

  void removeFile() {
    emit(WaitingForFileBasePredictionState());
  }

  Future<void> diagnose(BuildContext context) async {
    final state = this.state;
    if (state is! BasePredictionStateWithFile) return;
    final file = state.file;

    emit(FetchingPredictionsBasePredictionState(file));

    final either = await endpoint(file);
    either.fold(
      (failure) {
        showError(context, failure.message);
        emit(state);
      },
      (predictions) {
        emit(PredictedBasePredictionState(file, predictions));
        pushResultPage(file, predictions);
      },
    );
  }
}
