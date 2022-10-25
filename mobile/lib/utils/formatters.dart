import "package:intl/intl.dart";

class DateFormatters {

  static final _birthdayFormatter = DateFormat('dd.MM.yyyy');
  static final _birthdayWithAgeFormatter = DateFormat('dd MMMM yyyy');

  /// "21.11.2005" to DateTime(2005, 11, 21)
  static DateTime? parseBirthday(String string) {
    final parts = string.split(".").map(int.parse).toList();
    return DateTime(parts[2], parts[1], parts[0]);
  }

  /// DateTime(2005, 11, 21) to "21.11.2005"
  static String formatToBirthday(DateTime date) {
    return _birthdayFormatter.format(date);
  }

  /// DateTime(2005, 11, 21) to "21 ноября 2005 г. (16 лет)"
  static String formatBirthdayWithAge(DateTime date) {
    final birthday = _birthdayWithAgeFormatter.format(date);
    final ageNumber = (DateTime.now().difference(date).inDays / 365).floor();
    final age = formatNumber(ageNumber, ["год", "года", "лет"]);
    return "$birthday г. ($age)";
  }

  /// formats russians plural form
  /// ['яблоко', 'яблока', 'яблок']
  static String formatNumber(int amount, List<String> words) {
    int last = amount % 10;
    if (last == 1) return "$amount ${words[0]}";
    if (last <= 4) return "$amount ${words[1]}";
    return "$amount ${words[2]}";
  }
}