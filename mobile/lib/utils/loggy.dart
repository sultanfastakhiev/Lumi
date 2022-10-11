import 'package:loggy/loggy.dart';
import 'package:sentry_flutter/sentry_flutter.dart';

mixin BlocLoggy implements LoggyType {
  @override
  Loggy<BlocLoggy> get loggy => Loggy<BlocLoggy>('$runtimeType');
}

mixin ServiceLoggy implements LoggyType {
  @override
  Loggy<ServiceLoggy> get loggy => Loggy<ServiceLoggy>('$runtimeType');
}

mixin UseCaseLoggy implements LoggyType {
  @override
  Loggy<UseCaseLoggy> get loggy => Loggy<UseCaseLoggy>('$runtimeType');
}

mixin ModelLoggy implements LoggyType {
  @override
  Loggy<UseCaseLoggy> get loggy => Loggy<UseCaseLoggy>('$runtimeType');
}

mixin ApiLoggy implements LoggyType {
  @override
  Loggy<ApiLoggy> get loggy => Loggy<ApiLoggy>('$runtimeType');
}

class SentryPrinter extends LoggyPrinter {
  const SentryPrinter();

  @override
  void onLog(LogRecord record) {
    if (record.level == LogLevel.error) {
      Sentry.captureException(record.message, stackTrace: record.stackTrace, hint: record.error);
    } else {
      SentryLevel? sentryLevel;
      if (record.level == LogLevel.info) sentryLevel = SentryLevel.info;
      if (record.level == LogLevel.warning) sentryLevel = SentryLevel.warning;
      if (record.level == LogLevel.debug) sentryLevel = SentryLevel.debug;

      final breadcrumb = Breadcrumb(message: record.message, level: sentryLevel);
      Sentry.addBreadcrumb(breadcrumb);
    }
  }
}

late final Loggy logger;