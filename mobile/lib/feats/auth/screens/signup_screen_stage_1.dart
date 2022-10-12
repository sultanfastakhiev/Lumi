import 'package:auto_route/auto_route.dart';
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


class FirstStageSignupScreen extends StatefulWidget {
  const FirstStageSignupScreen({Key? key}) : super(key: key);

  @override
  State<FirstStageSignupScreen> createState() => _FirstStageSignupScreenState();
}

class _FirstStageSignupScreenState extends State<FirstStageSignupScreen> with SingleTickerProviderStateMixin {
  bool loading = false;
  String email = "", password = "";

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  
  void onNext() {
    if (_formKey.currentState?.validate() != true) return;
    _formKey.currentState?.save();
    AutoRouter.of(context).push(SecondStageSignupScreenRoute(email: email, password: password));
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
                  "Регистрация",
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 8),
                const PageSubtitle(
                  "Рады познакомиться.\nУкажите свой email и пароль",
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
                      : "Неверный email"
                      : "Это поле обязательно",
                  onSaved: (v) => email = v ?? '',
                ),
                const SizedBox(height: 20),
                PasswordInput(
                  label: "Пароль",
                  textInputAction: TextInputAction.done,
                  hint: "Введите ваш пароль",
                  validator: (s) => s != "" && s != null ? null : "Это поле обязательно",
                  onChanged: (v) => password = v ?? '',
                ),
                const SizedBox(height: 20),
                PasswordInput(
                  label: "Подтвердите пароль",
                  textInputAction: TextInputAction.done,
                  hint: "Подтвердите ваш пароль",
                  validator: (s) => s == password ? null : "Пароли не совпадают",
                  onChanged: (v) => password = v ?? '',
                ),
                const SizedBox(height: 24),
                PrimaryButton(
                  text: "Далее",
                  onTap: onNext,
                  fullWidth: true,
                ),
                const SizedBox(height: 16),
                AuthLink(
                  text: "Уже есть аккаунт?",
                  linkText: "Войти",
                  onTap: () => AutoRouter.of(context).pop(),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}