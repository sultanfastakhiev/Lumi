import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:mobile/utils/formatters.dart';

part 'user.freezed.dart';

@freezed
abstract class User with _$User {
  const User._();

  const factory User({
    required String id,
    required String name,
    required String lastName,
    required String patronymic,
    required DateTime birthday,
    required String username,
  }) = _User;

  Map<String, dynamic> toJson() => {
    "id": id,
    "name": name,
    "last_name": lastName,
    "patronymic": patronymic,
    "birthday": DateFormatters.formatToBirthday(birthday),
    "username": username,
  };

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json["id"],
      name: json["name"],
      lastName: json["last_name"],
      patronymic: json["patronymic"],
      birthday: DateFormatters.parseBirthday(json["birthday"])!,
      username: json["username"],
    );
  }

  Map<String, dynamic> toHydratedJson() => {
        "id": id,
        "name": name,
        "lastName": lastName,
        "patronymic": patronymic,
        "birthday": birthday.toIso8601String(),
        "username": username,
      };

  factory User.fromHydratedJson(Map<String, dynamic> json) {
    return User(
      id: json["id"],
      name: json["name"],
      lastName: json["lastName"],
      patronymic: json["patronymic"],
      birthday: DateTime.parse(json["birthday"]),
      username: json["username"],
    );
  }
}
