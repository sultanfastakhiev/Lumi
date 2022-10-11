import 'package:hive_flutter/hive_flutter.dart';
import 'package:mobile/utils/loggy.dart';

class HiveService with ServiceLoggy {
  T _get<T>(String boxName, String key, T defaultValue) {
    try {
      final box = Hive.box(boxName);
      return box.get(key, defaultValue: defaultValue);
    } catch (e, stackTrace) {
      loggy.error(e, stackTrace);
      return defaultValue;
    }
  }

  void _save<T>(String boxName, String key, T value) {
    try {
      final box = Hive.box(boxName);
      box.put(key, value);
    } catch (e, stackTrace) {
      loggy.error(e, stackTrace);
    }
  }

  void _clear<T>(String boxName, String key) {
    try {
      final box = Hive.box(boxName);
      box.delete(key);
    } catch (e, stackTrace) {
      loggy.error(e, stackTrace);
    }
  }

  String? getAuthToken() => _get(HiveBoxes.auth, AuthBoxKey.authToken, null);

  void putAuthToken(token) => _save(HiveBoxes.auth, AuthBoxKey.authToken, token);

  void deleteAuthToken() => _clear(HiveBoxes.auth, AuthBoxKey.authToken);
}

class HiveBoxes {
  static const auth = "auth";
}

class AuthBoxKey {
  static const String authToken = "auth_token";
}