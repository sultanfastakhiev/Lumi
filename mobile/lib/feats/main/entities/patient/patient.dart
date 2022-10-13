import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:mobile/utils/formatters.dart';

part 'patient.freezed.dart';

@freezed
abstract class Patient with _$Patient {
  const Patient._();

  const factory Patient({
    required String id,
    required String name,
    required String lastName,
    required String patronymic,
    required DateTime birthday,
    required String? consultations,
    required String? diagnosis,
    required String? operations,
    required String doctorId,
  }) = _Patient;

  String get fullName {
    var fullName = "";
    if (name.trim() != "") fullName = name;
    if (lastName.trim() != "") fullName += " $lastName";
    if (patronymic.trim() != "") fullName += " $patronymic";
    return fullName;
  }

  Map<String, dynamic> toJson() {
    Map<String, dynamic> data = {
      "id": id,
      "name": name,
      "last_name": lastName,
      "patronymic": patronymic,
      "birthday": DateFormatters.formatToBirthday(birthday),
      "doctor": doctorId,
    };
    if (consultations != null) data["consultations"] = consultations;
    if (diagnosis != null) data["diagnosis"] = diagnosis;
    if (operations != null) data["operations"] = operations;
    return data;
  }

  factory Patient.fromJson(Map<String, dynamic> json) {
    return Patient(
      id: json["id"],
      name: json["name"],
      lastName: json["last_name"],
      patronymic: json["patronymic"],
      birthday: DateFormatters.parseBirthday(json["birthday"])!,
      consultations: json["consultations"] == "" ? null : json["consultations"],
      operations: json["operations"] == "" ? null : json["operations"],
      diagnosis: json["diagnosis"] == "" ? null : json["diagnosis"],
      doctorId: json["doctor"],
    );
  }
}
