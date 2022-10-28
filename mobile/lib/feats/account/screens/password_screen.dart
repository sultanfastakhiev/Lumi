// ignore_for_file: use_build_context_synchronously

import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/components/button/primary.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/inputs/password_input.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/feats/auth/bloc/user_cubit/user_cubit.dart';
import 'package:mobile/utils/utils.dart';

class PasswordScreen extends StatefulWidget {
  const PasswordScreen({Key? key}) : super(key: key);

  @override
  State<PasswordScreen> createState() => _PasswordScreenState();
}

class _PasswordScreenState extends State<PasswordScreen> {
  String password = "";
  bool loading = false;

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  Future<void> handleSubmit() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() => loading = true);
    _formKey.currentState!.save();

    final failure = await context.read<UserCubit>().updatePassword(password);

    if (failure != null) {
      showError(context, failure.message);
    } else {
      AutoRouter.of(context).pop();
    }

    setState(() => loading = false);
  }

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: Form(
        key: _formKey,
        child: ListView(
          children: [
            const Header("Аккаунт"),
            PasswordInput(
              label: "Пароль",
              hint: "Введите ваш новый пароль",
              validator: (v) => v!.isEmpty ? "Это поле обязательно" : null,
              onChanged: (v) => password = v!,
            ),
            const SizedBox(height: 20),
            PasswordInput(
              label: "Подтвердите пароль",
              hint: "Подтвердите ваш новый пароль",
              validator: (v) => v != password ? "Пароли не совпадают" : null,
            ),
            const SizedBox(height: 20),
            PrimaryButton(
              text: "Сохранить",
              onTap: handleSubmit,
              loading: loading,
              fullWidth: true,
            ),
          ],
        ),
      ),
    );
  }
}
