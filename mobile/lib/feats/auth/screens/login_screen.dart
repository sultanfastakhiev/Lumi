import 'package:email_validator/email_validator.dart';
import 'package:flutter/material.dart';
import 'package:mobile/components/button/primary.dart';
import 'package:mobile/components/inputs/default_input.dart';
import 'package:mobile/components/inputs/password_input.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/components/typography/page_subtitle.dart';
import 'package:mobile/components/typography/page_title.dart';
import 'package:mobile/feats/auth/widgets/link.dart';
import 'package:mobile/router/router.gr.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  String email = "", password = "";
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  void handleSubmit() {
    if (_formKey.currentState?.validate() == true) {
      _formKey.currentState?.save();
      print("$email $password");
    }
  }

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: Form(
        key: _formKey,
        child: Center(
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // Header
                const PageTitle(
                  "Вход в аккаунт",
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 8),
                const PageSubtitle(
                  "С возвращением! Введите свои данные.",
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 32),

                // Form
                Input(
                  label: "Email",
                  textInputAction: TextInputAction.next,
                  keyboardType: TextInputType.emailAddress,
                  hint: "Введите ваш email",
                  validator: (s) => s != null
                      ? EmailValidator.validate(s)
                          ? null
                          : ""
                      : "",
                  onSaved: (s) => email = s ?? '',
                ),
                const SizedBox(height: 20),
                PasswordInput(
                  label: "Пароль",
                  textInputAction: TextInputAction.done,
                  hint: "Введите ваш пароль",
                  validator: (s) => s != "" && s != null ? null : "",
                  onSaved: (s) => password = s ?? '',
                ),
                const SizedBox(height: 24),
                PrimaryButton(
                  text: "Войти",
                  onTap: handleSubmit,
                ),
                const SizedBox(height: 16),
                const AuthLink(
                  text: "Еще нет аккаунта?",
                  linkText: "Зарегистрировать",
                  route: SignupScreenRoute(),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
