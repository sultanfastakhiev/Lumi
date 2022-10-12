// ignore_for_file: use_build_context_synchronously

import 'package:auto_route/auto_route.dart';
import 'package:email_validator/email_validator.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/components/button/primary.dart';
import 'package:mobile/components/inputs/default_input.dart';
import 'package:mobile/components/inputs/password_input.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/components/typography/page_subtitle.dart';
import 'package:mobile/components/typography/page_title.dart';
import 'package:mobile/feats/auth/bloc/user_cubit/user_cubit.dart';
import 'package:mobile/feats/auth/screens/signup_screen_stage_1.dart';
import 'package:mobile/feats/auth/widgets/link.dart';
import 'package:mobile/feats/main/bloc/patients_list_cubit/patients_list_cubit.dart';
import 'package:mobile/router/router.gr.dart';
import 'package:mobile/utils/utils.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  bool loading = false;
  String email = "", password = "";
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  Future<void> handleSubmit() async {
    if (_formKey.currentState?.validate() == true) {
      _formKey.currentState?.save();
      setState(() => loading = true);
      final failure = await context.read<UserCubit>().login(email, password);
      setState(() => loading = false);
      if (failure != null) {
        return showError(context, failure.message);
      }
      context.read<PatientsListCubit>().load();
      AutoRouter.of(context).pushAndPopUntil(const MainScreenRoute(), predicate: (_) => false);
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
                  expandInput: false,
                ),
                const SizedBox(height: 20),
                PasswordInput(
                  label: "Пароль",
                  textInputAction: TextInputAction.done,
                  hint: "Введите ваш пароль",
                  validator: (s) => s != "" && s != null ? null : "",
                  onSaved: (s) => password = s ?? '',
                  expandInput: false,
                ),
                const SizedBox(height: 24),
                PrimaryButton(
                  text: "Войти",
                  onTap: handleSubmit,
                  loading: loading,
                  fullWidth: true,
                ),
                const SizedBox(height: 16),
                AuthLink(
                  text: "Еще нет аккаунта?",
                  linkText: "Зарегистрировать",
                  onTap: () => AutoRouter.of(context).push(const FirstStageSignupScreenRoute()),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
