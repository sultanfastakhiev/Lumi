import "package:intl/intl.dart";

class DateFormatters {

  static final _birthdayFormatter = DateFormat('dd.MM.yyyy');

  // "21.11.2005" to DateTime(2005, 11, 21)
  static DateTime? parseBirthday(String string) {
    final parts = string.split(".").map(int.parse).toList();
    return DateTime(parts[2], parts[1], parts[0]);
  }

  // DateTime(2005, 11, 21) to "21.11.2005"
  static String formatToBirthday(DateTime date) {
    return _birthdayFormatter.format(date);
  }
}