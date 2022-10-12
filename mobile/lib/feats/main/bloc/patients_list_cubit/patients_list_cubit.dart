import 'package:equatable/equatable.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/feats/entities/patient/patient.dart';
import 'package:mobile/feats/main/api/get_patients_endpoint.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/utils/failure.dart';

part 'patients_list_state.dart';

class PatientsListCubit extends Cubit<PatientsListState> {
  late final GetPatientsEndpoint _getPatientsEndpoint;

  PatientsListCubit() : super(LoadingPatientsListState()) {
    _getPatientsEndpoint = locator<GetPatientsEndpoint>();
  }

  Future<void> load() async {
    final either = await _getPatientsEndpoint();
    either.fold(
      (failure) => emit(ErrorPatientsListState(failure)),
      (patients) => emit(IdlePatientsListState(patients: patients)),
    );
  }
}
