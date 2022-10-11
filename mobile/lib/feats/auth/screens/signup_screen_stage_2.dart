// ignore_for_file: use_build_context_synchronously

import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/components/button/primary.dart';
import 'package:mobile/components/inputs/date_input.dart';
import 'package:mobile/components/inputs/default_input.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/components/typography/page_subtitle.dart';
import 'package:mobile/components/typography/page_title.dart';
import 'package:mobile/feats/auth/bloc/user_cubit/user_cubit.dart';
import 'package:mobile/feats/auth/widgets/link.dart';
import 'package:mobile/router/router.gr.dart';
import 'package:mobile/utils/utils.dart';

class SecondStageSignupScreen extends StatefulWidget {
  final String email, password;

  const SecondStageSignupScreen({
    Key? key,
    required this.email,
    required this.password,
  }) : super(key: key);

  @override
  State<SecondStageSignupScreen> createState() => _SecondStageSignupScreenState();
}

class _SecondStageSignupScreenState extends State<SecondStageSignupScreen> with SingleTickerProviderStateMixin {
  bool loading = false;
  String name = "", lastName = "", patronymic = "";
  DateTime? dateOfBirth;

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  Future<void> handleSubmit() async {
    if (_formKey.currentState?.validate() != true) return;
    _formKey.currentState?.save();
    setState(() => loading = true);
    final failure = await context.read<UserCubit>().signup(
          email: widget.email,
          password: widget.password,
          name: name,
          lastName: lastName,
          patronymic: patronymic,
          dateOfBirth: dateOfBirth!,
        );
    setState(() => loading = false);
    if (failure != null) {
      showError(context, failure.message);
    } else {
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
                  "Регистрация",
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 8),
                const PageSubtitle(
                  "Уже почти закончили!\nВведите оставшиеся данные ",
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 32),

                // Form
                Input(
                  label: "Фамилия",
                  textInputAction: TextInputAction.next,
                  keyboardType: TextInputType.emailAddress,
                  hint: "Введите вашу фамилию",
                  validator: (s) => s != "" && s != null ? null : "Это поле обязательно",
                  onSaved: (v) => lastName = v ?? '',
                ),
                const SizedBox(height: 20),
                Input(
                  label: "Имя",
                  textInputAction: TextInputAction.next,
                  keyboardType: TextInputType.emailAddress,
                  hint: "Введите ваше имя",
                  validator: (s) => s != "" && s != null ? null : "Это поле обязательно",
                  onSaved: (v) => name = v ?? '',
                ),
                const SizedBox(height: 20),
                Input(
                  label: "Отчество",
                  textInputAction: TextInputAction.done,
                  keyboardType: TextInputType.emailAddress,
                  hint: "Введите ваше отчество",
                  validator: (s) => s != "" && s != null ? null : "Это поле обязательно",
                  onSaved: (v) => patronymic = v ?? '',
                ),
                const SizedBox(height: 20),
                DateInput(
                  label: "Дата рождения",
                  hint: "Выберите дату вашего рождения",
                  validator: (d) => d != null
                      ? d.isBefore(DateTime.now())
                          ? null
                          : "Неверная дата рождения"
                      : "Это поле обязательно",
                  onSaved: (v) => dateOfBirth = v,
                ),
                const SizedBox(height: 24),
                PrimaryButton(
                  text: "Зарегистрироваться",
                  onTap: handleSubmit,
                ),
                const SizedBox(height: 16),
                AuthLink(
                  text: "",
                  linkText: "Вернуться назад ",
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
