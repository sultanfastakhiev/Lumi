// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target

part of 'kidney_prediction.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$KidneyPrediction {
  String get label => throw _privateConstructorUsedError;
  double get probability => throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $KidneyPredictionCopyWith<KidneyPrediction> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $KidneyPredictionCopyWith<$Res> {
  factory $KidneyPredictionCopyWith(
          KidneyPrediction value, $Res Function(KidneyPrediction) then) =
      _$KidneyPredictionCopyWithImpl<$Res>;
  $Res call({String label, double probability});
}

/// @nodoc
class _$KidneyPredictionCopyWithImpl<$Res>
    implements $KidneyPredictionCopyWith<$Res> {
  _$KidneyPredictionCopyWithImpl(this._value, this._then);

  final KidneyPrediction _value;
  // ignore: unused_field
  final $Res Function(KidneyPrediction) _then;

  @override
  $Res call({
    Object? label = freezed,
    Object? probability = freezed,
  }) {
    return _then(_value.copyWith(
      label: label == freezed
          ? _value.label
          : label // ignore: cast_nullable_to_non_nullable
              as String,
      probability: probability == freezed
          ? _value.probability
          : probability // ignore: cast_nullable_to_non_nullable
              as double,
    ));
  }
}

/// @nodoc
abstract class _$$_KidneyPredictionCopyWith<$Res>
    implements $KidneyPredictionCopyWith<$Res> {
  factory _$$_KidneyPredictionCopyWith(
          _$_KidneyPrediction value, $Res Function(_$_KidneyPrediction) then) =
      __$$_KidneyPredictionCopyWithImpl<$Res>;
  @override
  $Res call({String label, double probability});
}

/// @nodoc
class __$$_KidneyPredictionCopyWithImpl<$Res>
    extends _$KidneyPredictionCopyWithImpl<$Res>
    implements _$$_KidneyPredictionCopyWith<$Res> {
  __$$_KidneyPredictionCopyWithImpl(
      _$_KidneyPrediction _value, $Res Function(_$_KidneyPrediction) _then)
      : super(_value, (v) => _then(v as _$_KidneyPrediction));

  @override
  _$_KidneyPrediction get _value => super._value as _$_KidneyPrediction;

  @override
  $Res call({
    Object? label = freezed,
    Object? probability = freezed,
  }) {
    return _then(_$_KidneyPrediction(
      label: label == freezed
          ? _value.label
          : label // ignore: cast_nullable_to_non_nullable
              as String,
      probability: probability == freezed
          ? _value.probability
          : probability // ignore: cast_nullable_to_non_nullable
              as double,
    ));
  }
}

/// @nodoc

class _$_KidneyPrediction implements _KidneyPrediction {
  const _$_KidneyPrediction({required this.label, required this.probability});

  @override
  final String label;
  @override
  final double probability;

  @override
  String toString() {
    return 'KidneyPrediction(label: $label, probability: $probability)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_KidneyPrediction &&
            const DeepCollectionEquality().equals(other.label, label) &&
            const DeepCollectionEquality()
                .equals(other.probability, probability));
  }

  @override
  int get hashCode => Object.hash(
      runtimeType,
      const DeepCollectionEquality().hash(label),
      const DeepCollectionEquality().hash(probability));

  @JsonKey(ignore: true)
  @override
  _$$_KidneyPredictionCopyWith<_$_KidneyPrediction> get copyWith =>
      __$$_KidneyPredictionCopyWithImpl<_$_KidneyPrediction>(this, _$identity);
}

abstract class _KidneyPrediction implements KidneyPrediction {
  const factory _KidneyPrediction(
      {required final String label,
      required final double probability}) = _$_KidneyPrediction;

  @override
  String get label;
  @override
  double get probability;
  @override
  @JsonKey(ignore: true)
  _$$_KidneyPredictionCopyWith<_$_KidneyPrediction> get copyWith =>
      throw _privateConstructorUsedError;
}
