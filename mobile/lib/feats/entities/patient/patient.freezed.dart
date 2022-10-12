// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target

part of 'patient.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$Patient {
  String get id => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  String get lastName => throw _privateConstructorUsedError;
  String get patronymic => throw _privateConstructorUsedError;
  DateTime get birthday => throw _privateConstructorUsedError;
  String? get consultations => throw _privateConstructorUsedError;
  String? get diagnosis => throw _privateConstructorUsedError;
  String? get operations => throw _privateConstructorUsedError;
  String get doctorId => throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $PatientCopyWith<Patient> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $PatientCopyWith<$Res> {
  factory $PatientCopyWith(Patient value, $Res Function(Patient) then) =
      _$PatientCopyWithImpl<$Res>;
  $Res call(
      {String id,
      String name,
      String lastName,
      String patronymic,
      DateTime birthday,
      String? consultations,
      String? diagnosis,
      String? operations,
      String doctorId});
}

/// @nodoc
class _$PatientCopyWithImpl<$Res> implements $PatientCopyWith<$Res> {
  _$PatientCopyWithImpl(this._value, this._then);

  final Patient _value;
  // ignore: unused_field
  final $Res Function(Patient) _then;

  @override
  $Res call({
    Object? id = freezed,
    Object? name = freezed,
    Object? lastName = freezed,
    Object? patronymic = freezed,
    Object? birthday = freezed,
    Object? consultations = freezed,
    Object? diagnosis = freezed,
    Object? operations = freezed,
    Object? doctorId = freezed,
  }) {
    return _then(_value.copyWith(
      id: id == freezed
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: name == freezed
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      lastName: lastName == freezed
          ? _value.lastName
          : lastName // ignore: cast_nullable_to_non_nullable
              as String,
      patronymic: patronymic == freezed
          ? _value.patronymic
          : patronymic // ignore: cast_nullable_to_non_nullable
              as String,
      birthday: birthday == freezed
          ? _value.birthday
          : birthday // ignore: cast_nullable_to_non_nullable
              as DateTime,
      consultations: consultations == freezed
          ? _value.consultations
          : consultations // ignore: cast_nullable_to_non_nullable
              as String?,
      diagnosis: diagnosis == freezed
          ? _value.diagnosis
          : diagnosis // ignore: cast_nullable_to_non_nullable
              as String?,
      operations: operations == freezed
          ? _value.operations
          : operations // ignore: cast_nullable_to_non_nullable
              as String?,
      doctorId: doctorId == freezed
          ? _value.doctorId
          : doctorId // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
abstract class _$$_PatientCopyWith<$Res> implements $PatientCopyWith<$Res> {
  factory _$$_PatientCopyWith(
          _$_Patient value, $Res Function(_$_Patient) then) =
      __$$_PatientCopyWithImpl<$Res>;
  @override
  $Res call(
      {String id,
      String name,
      String lastName,
      String patronymic,
      DateTime birthday,
      String? consultations,
      String? diagnosis,
      String? operations,
      String doctorId});
}

/// @nodoc
class __$$_PatientCopyWithImpl<$Res> extends _$PatientCopyWithImpl<$Res>
    implements _$$_PatientCopyWith<$Res> {
  __$$_PatientCopyWithImpl(_$_Patient _value, $Res Function(_$_Patient) _then)
      : super(_value, (v) => _then(v as _$_Patient));

  @override
  _$_Patient get _value => super._value as _$_Patient;

  @override
  $Res call({
    Object? id = freezed,
    Object? name = freezed,
    Object? lastName = freezed,
    Object? patronymic = freezed,
    Object? birthday = freezed,
    Object? consultations = freezed,
    Object? diagnosis = freezed,
    Object? operations = freezed,
    Object? doctorId = freezed,
  }) {
    return _then(_$_Patient(
      id: id == freezed
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: name == freezed
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      lastName: lastName == freezed
          ? _value.lastName
          : lastName // ignore: cast_nullable_to_non_nullable
              as String,
      patronymic: patronymic == freezed
          ? _value.patronymic
          : patronymic // ignore: cast_nullable_to_non_nullable
              as String,
      birthday: birthday == freezed
          ? _value.birthday
          : birthday // ignore: cast_nullable_to_non_nullable
              as DateTime,
      consultations: consultations == freezed
          ? _value.consultations
          : consultations // ignore: cast_nullable_to_non_nullable
              as String?,
      diagnosis: diagnosis == freezed
          ? _value.diagnosis
          : diagnosis // ignore: cast_nullable_to_non_nullable
              as String?,
      operations: operations == freezed
          ? _value.operations
          : operations // ignore: cast_nullable_to_non_nullable
              as String?,
      doctorId: doctorId == freezed
          ? _value.doctorId
          : doctorId // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_Patient extends _Patient {
  const _$_Patient(
      {required this.id,
      required this.name,
      required this.lastName,
      required this.patronymic,
      required this.birthday,
      required this.consultations,
      required this.diagnosis,
      required this.operations,
      required this.doctorId})
      : super._();

  @override
  final String id;
  @override
  final String name;
  @override
  final String lastName;
  @override
  final String patronymic;
  @override
  final DateTime birthday;
  @override
  final String? consultations;
  @override
  final String? diagnosis;
  @override
  final String? operations;
  @override
  final String doctorId;

  @override
  String toString() {
    return 'Patient(id: $id, name: $name, lastName: $lastName, patronymic: $patronymic, birthday: $birthday, consultations: $consultations, diagnosis: $diagnosis, operations: $operations, doctorId: $doctorId)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Patient &&
            const DeepCollectionEquality().equals(other.id, id) &&
            const DeepCollectionEquality().equals(other.name, name) &&
            const DeepCollectionEquality().equals(other.lastName, lastName) &&
            const DeepCollectionEquality()
                .equals(other.patronymic, patronymic) &&
            const DeepCollectionEquality().equals(other.birthday, birthday) &&
            const DeepCollectionEquality()
                .equals(other.consultations, consultations) &&
            const DeepCollectionEquality().equals(other.diagnosis, diagnosis) &&
            const DeepCollectionEquality()
                .equals(other.operations, operations) &&
            const DeepCollectionEquality().equals(other.doctorId, doctorId));
  }

  @override
  int get hashCode => Object.hash(
      runtimeType,
      const DeepCollectionEquality().hash(id),
      const DeepCollectionEquality().hash(name),
      const DeepCollectionEquality().hash(lastName),
      const DeepCollectionEquality().hash(patronymic),
      const DeepCollectionEquality().hash(birthday),
      const DeepCollectionEquality().hash(consultations),
      const DeepCollectionEquality().hash(diagnosis),
      const DeepCollectionEquality().hash(operations),
      const DeepCollectionEquality().hash(doctorId));

  @JsonKey(ignore: true)
  @override
  _$$_PatientCopyWith<_$_Patient> get copyWith =>
      __$$_PatientCopyWithImpl<_$_Patient>(this, _$identity);
}

abstract class _Patient extends Patient {
  const factory _Patient(
      {required final String id,
      required final String name,
      required final String lastName,
      required final String patronymic,
      required final DateTime birthday,
      required final String? consultations,
      required final String? diagnosis,
      required final String? operations,
      required final String doctorId}) = _$_Patient;
  const _Patient._() : super._();

  @override
  String get id;
  @override
  String get name;
  @override
  String get lastName;
  @override
  String get patronymic;
  @override
  DateTime get birthday;
  @override
  String? get consultations;
  @override
  String? get diagnosis;
  @override
  String? get operations;
  @override
  String get doctorId;
  @override
  @JsonKey(ignore: true)
  _$$_PatientCopyWith<_$_Patient> get copyWith =>
      throw _privateConstructorUsedError;
}
