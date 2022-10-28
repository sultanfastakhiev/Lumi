// ignore_for_file: use_build_context_synchronously

import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/components/button/primary.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/inputs/date_input.dart';
import 'package:mobile/components/inputs/default_input.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/feats/auth/bloc/user_cubit/user_cubit.dart';
import 'package:mobile/utils/utils.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({Key? key}) : super(key: key);

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  String username = "", lastName = "", name = "", patronymic = "";
  DateTime birthday = DateTime(0);
  bool loading = false;

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  void initState() {
    super.initState();

    // Apply initial form state
    final state = context.read<UserCubit>().state;
    if (state is! AuthorizedState) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        AutoRouter.of(context).pop();
      });
    } else {
      final user = state.user;
      username = user.username;
      lastName = user.lastName;
      name = user.name;
      patronymic = user.patronymic;
      birthday = user.birthday;
    }
  }

  Future<void> handleSubmit() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() => loading = true);
    _formKey.currentState!.save();

    final failure = await context.read<UserCubit>().update(
      username: username,
      name: name,
      lastName: lastName,
      patronymic: patronymic,
      birthday: birthday,
    );

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
            Input(
              label: "Username",
              hint: "Введите ваш username",
              initialValue: username,
              validator: (v) => v!.isEmpty ? "Это поле обязательно" : null,
              onSaved: (v) => username = v!,
            ),
            const SizedBox(height: 20),
            Input(
              label: "Фамилия",
              hint: "Введите вашу фамилию",
              initialValue: lastName,
              validator: (v) => v!.isEmpty ? "Это поле обязательно" : null,
              onSaved: (v) => lastName = v!,
            ),
            const SizedBox(height: 20),
            Input(
              label: "Имя",
              hint: "Введите ваше имя",
              initialValue: name,
              validator: (v) => v!.isEmpty ? "Это поле обязательно" : null,
              onSaved: (v) => name = v!,
            ),
            const SizedBox(height: 20),
            Input(
              label: "Отчество",
              hint: "Введите ваше отчество",
              initialValue: patronymic,
              validator: (v) => v!.isEmpty ? "Это поле обязательно" : null,
              onSaved: (v) => patronymic = v!,
            ),
            const SizedBox(height: 20),
            DateInput(
              label: "Дата рождения",
              hint: "Выберите вашу дату рождения",
              initialValue: birthday,
              validator: (v) => v == null
                  ? "Это поле обязательно"
                  : DateTime.now().add(const Duration(days: 1)).isBefore(v)
                      ? "Неверная дата рождения"
                      : null,
              onSaved: (v) => birthday = v!,
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
