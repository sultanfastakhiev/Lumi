// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target

part of 'prediction.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$Prediction {
  String get label => throw _privateConstructorUsedError;
  double get probability => throw _privateConstructorUsedError;
  List<String>? get pathologies => throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $PredictionCopyWith<Prediction> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $PredictionCopyWith<$Res> {
  factory $PredictionCopyWith(
          Prediction value, $Res Function(Prediction) then) =
      _$PredictionCopyWithImpl<$Res>;
  $Res call({String label, double probability, List<String>? pathologies});
}

/// @nodoc
class _$PredictionCopyWithImpl<$Res> implements $PredictionCopyWith<$Res> {
  _$PredictionCopyWithImpl(this._value, this._then);

  final Prediction _value;
  // ignore: unused_field
  final $Res Function(Prediction) _then;

  @override
  $Res call({
    Object? label = freezed,
    Object? probability = freezed,
    Object? pathologies = freezed,
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
      pathologies: pathologies == freezed
          ? _value.pathologies
          : pathologies // ignore: cast_nullable_to_non_nullable
              as List<String>?,
    ));
  }
}

/// @nodoc
abstract class _$$_PredictionCopyWith<$Res>
    implements $PredictionCopyWith<$Res> {
  factory _$$_PredictionCopyWith(
          _$_Prediction value, $Res Function(_$_Prediction) then) =
      __$$_PredictionCopyWithImpl<$Res>;
  @override
  $Res call({String label, double probability, List<String>? pathologies});
}

/// @nodoc
class __$$_PredictionCopyWithImpl<$Res> extends _$PredictionCopyWithImpl<$Res>
    implements _$$_PredictionCopyWith<$Res> {
  __$$_PredictionCopyWithImpl(
      _$_Prediction _value, $Res Function(_$_Prediction) _then)
      : super(_value, (v) => _then(v as _$_Prediction));

  @override
  _$_Prediction get _value => super._value as _$_Prediction;

  @override
  $Res call({
    Object? label = freezed,
    Object? probability = freezed,
    Object? pathologies = freezed,
  }) {
    return _then(_$_Prediction(
      label: label == freezed
          ? _value.label
          : label // ignore: cast_nullable_to_non_nullable
              as String,
      probability: probability == freezed
          ? _value.probability
          : probability // ignore: cast_nullable_to_non_nullable
              as double,
      pathologies: pathologies == freezed
          ? _value._pathologies
          : pathologies // ignore: cast_nullable_to_non_nullable
              as List<String>?,
    ));
  }
}

/// @nodoc

class _$_Prediction implements _Prediction {
  const _$_Prediction(
      {required this.label,
      required this.probability,
      final List<String>? pathologies})
      : _pathologies = pathologies;

  @override
  final String label;
  @override
  final double probability;
  final List<String>? _pathologies;
  @override
  List<String>? get pathologies {
    final value = _pathologies;
    if (value == null) return null;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(value);
  }

  @override
  String toString() {
    return 'Prediction(label: $label, probability: $probability, pathologies: $pathologies)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Prediction &&
            const DeepCollectionEquality().equals(other.label, label) &&
            const DeepCollectionEquality()
                .equals(other.probability, probability) &&
            const DeepCollectionEquality()
                .equals(other._pathologies, _pathologies));
  }

  @override
  int get hashCode => Object.hash(
      runtimeType,
      const DeepCollectionEquality().hash(label),
      const DeepCollectionEquality().hash(probability),
      const DeepCollectionEquality().hash(_pathologies));

  @JsonKey(ignore: true)
  @override
  _$$_PredictionCopyWith<_$_Prediction> get copyWith =>
      __$$_PredictionCopyWithImpl<_$_Prediction>(this, _$identity);
}

abstract class _Prediction implements Prediction {
  const factory _Prediction(
      {required final String label,
      required final double probability,
      final List<String>? pathologies}) = _$_Prediction;

  @override
  String get label;
  @override
  double get probability;
  @override
  List<String>? get pathologies;
  @override
  @JsonKey(ignore: true)
  _$$_PredictionCopyWith<_$_Prediction> get copyWith =>
      throw _privateConstructorUsedError;
}
