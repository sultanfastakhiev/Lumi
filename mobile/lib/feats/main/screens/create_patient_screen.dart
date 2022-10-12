// ignore_for_file: use_build_context_synchronously

import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/components/button/primary.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/inputs/date_input.dart';
import 'package:mobile/components/inputs/default_input.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/components/typography/page_subtitle.dart';
import 'package:mobile/feats/auth/bloc/user_cubit/user_cubit.dart';
import 'package:mobile/feats/main/api/create_patient_endpoint.dart';
import 'package:mobile/feats/main/bloc/patients_list_cubit/patients_list_cubit.dart';
import 'package:mobile/locator.dart';

class CreatePatientScreen extends StatefulWidget {
  const CreatePatientScreen({Key? key}) : super(key: key);

  @override
  State<CreatePatientScreen> createState() => _CreatePatientScreenState();
}

class _CreatePatientScreenState extends State<CreatePatientScreen> {
  String name = "", lastName = "", patronymic = "";
  late DateTime dateOfBirth;
  bool loading = false;

  final GlobalKey<FormState> _globalKey = GlobalKey<FormState>();

  void handleSubmit() async {
    if (!_globalKey.currentState!.validate()) return;
    setState(() => loading = true);
    _globalKey.currentState!.save();
    final id = (context.read<UserCubit>().state as AuthorizedState).user.id;
    final either = await locator<CreatePatientEndpoint>()(
      name: name,
      birthday: dateOfBirth,
      lastName: lastName,
      patronymic: patronymic,
      doctorId: id,
    );
    if (either.isRight()) {
      await context.read<PatientsListCubit>().load();
      AutoRouter.of(context).pop();
    }
    setState(() => loading = false);
  }

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: Form(
        key: _globalKey,
        child: ListView(
          children: [
            const Header("Создать пациента"),
            const PageSubtitle("Создайте нового пациента, чтобы вести\nисторию консультаций и ставить диагнозы"),
            const SizedBox(height: 24),

            // Form
            Input(
              label: "Фамилия",
              hint: "Введите фамилию пациента",
              validator: (v) => v!.trim().isEmpty ? "Это поле обязательно" : null,
              onSaved: (v) => lastName = v!,
              keyboardType: TextInputType.name,
              textInputAction: TextInputAction.next,
            ),
            const SizedBox(height: 20),
            Input(
              label: "Имя",
              hint: "Введите имя пациента",
              validator: (v) => v!.trim().isEmpty ? "Это поле обязательно" : null,
              onSaved: (v) => name = v!,
              keyboardType: TextInputType.name,
              textInputAction: TextInputAction.next,
            ),
            const SizedBox(height: 20),
            Input(
              label: "Отчество",
              hint: "Введите отчество пациента",
              validator: (v) => v!.trim().isEmpty ? "Это поле обязательно" : null,
              onSaved: (v) => patronymic = v!,
              keyboardType: TextInputType.name,
              textInputAction: TextInputAction.done,
            ),
            const SizedBox(height: 20),
            DateInput(
              label: "Дата рождения",
              hint: "Выберите дату рождения пациента",
              validator: (v) => v == null
                  ? "Это поле обязательно"
                  : DateTime.now().add(const Duration(days: 1)).isBefore(v)
                      ? "Неверная дата рождения"
                      : null,
              onSaved: (v) => dateOfBirth = v!,
            ),
            const SizedBox(height: 20),
            PrimaryButton(
              text: "Создать",
              onTap: handleSubmit,
              fullWidth: true,
              loading: loading,
            ),
          ],
        ),
      ),
    );
  }
}
