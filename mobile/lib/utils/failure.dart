abstract class Failure {
  final String message;

  const Failure(this.message);
}

class InvalidCredentials extends Failure {
  const InvalidCredentials() : super("Неверные данные");
}

class CantAccessOurServices extends Failure {
  const CantAccessOurServices() : super("Наши сервисы сейчас не доступны");
}
