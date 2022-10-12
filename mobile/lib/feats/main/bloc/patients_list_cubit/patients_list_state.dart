part of 'patients_list_cubit.dart';

abstract class PatientsListState extends Equatable {
  const PatientsListState();
}

class LoadingPatientsListState extends PatientsListState {
  @override
  List<Object> get props => [];
}

class IdlePatientsListState extends PatientsListState {
  final List<Patient> patients;

  const IdlePatientsListState({ required this.patients });

  bool get isEmpty => patients.isEmpty;

  @override
  List<Object> get props => [patients];
}

class ErrorPatientsListState extends PatientsListState {
  final Failure failure;

  const ErrorPatientsListState(this.failure);

  @override
  List<Object> get props => [failure];
}