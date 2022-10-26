import 'dart:io';

import 'package:auto_route/auto_route.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:image_picker/image_picker.dart';
import 'package:mobile/feats/diagnosis/api/predict_kidney_diseases_endpoint.dart';
import 'package:mobile/feats/diagnosis/entities/kidney_prediction/kidney_prediction.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/router/router.gr.dart';
import 'package:mobile/utils/utils.dart';

part 'kidney_diseases_state.dart';

part 'kidney_diseases_selectors.dart';

class KidneyDiseasesCubit extends Cubit<KidneyDiseasesState> {
  late final PredictKidneyDiseasesEndpoint _endpoint;

  KidneyDiseasesCubit() : super(WaitingForFileKidneyDiseasesState()) {
    _endpoint = locator<PredictKidneyDiseasesEndpoint>();
  }

  void uploadFile(XFile file) {
    emit(FileUploadedKidneyDiseasesState(File(file.path)));
  }

  void removeFile() {
    emit(WaitingForFileKidneyDiseasesState());
  }

  Future<void> diagnose(BuildContext context) async {
    final state = this.state;
    if (state is! KidneyDiseasesStateWithFile) return;
    final image = state.file;

    emit(FetchingPredictionsKidneyDiseasesState(image));

    final either = await _endpoint(image);
    either.fold(
      (failure) {
        showError(context, failure.message);
        emit(state);
      },
      (predictions) {
        emit(PredictedKidneyDiseasesState(image, predictions));
        AutoRouter.of(context).push(KidneyDiseasesResultsScreenRoute(image: image, predictions: predictions));
      },
    );
  }
}
