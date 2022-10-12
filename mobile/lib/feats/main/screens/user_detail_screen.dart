import 'package:flutter/material.dart';
import 'package:mobile/components/button/primary.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/inputs/date_input.dart';
import 'package:mobile/components/inputs/default_input.dart';
import 'package:mobile/components/layouts/empty.dart';

class UserDetailScreen extends StatefulWidget {
  final String id;

  const UserDetailScreen({Key? key, required this.id}) : super(key: key);

  @override
  State<UserDetailScreen> createState() => _UserDetailScreenState();
}

class _UserDetailScreenState extends State<UserDetailScreen> {
  bool loading = false;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  String name = "", lastName = "", patronymic = "", consultations = "", diagnosis = "", operations = "";
  late DateTime birthday;

  void handleSubmit() {
    if (!_formKey.currentState!.validate()) return;
    _formKey.currentState!.save();
    setState(() => loading = true);
  }

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: Form(
        key: _formKey,
        child: SingleChildScrollView(
          child: Column(
            children: [
              const Header("Пациент"),

              // Form
              Input(
                label: "Фамилия",
                hint: "Введите фамилию пациента",
                validator: (v) => v!.isEmpty ? "Это поле обязательно" : null,
                onSaved: (v) => lastName = v!,
              ),
              const SizedBox(height: 20),
              Input(
                label: "Имя",
                hint: "Введите фамилию пациента",
                validator: (v) => v!.isEmpty ? "Это поле обязательно" : null,
                onSaved: (v) => name = v!,
              ),
              const SizedBox(height: 20),
              Input(
                label: "Отчество",
                hint: "Введите отчество пациента",
                validator: (v) => v!.isEmpty ? "Это поле обязательно" : null,
                onSaved: (v) => patronymic = v!,
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
                onSaved: (v) => birthday = v!,
              ),
              const SizedBox(height: 20),
              Input(
                label: "Консультанции",
                hint: "Введите консультации",
                onSaved: (v) => consultations = v!,
                minLines: 7,
                maxLines: 20,
              ),
              const SizedBox(height: 20),
              Input(
                label: "Диагнозы",
                hint: "Введите диагнозы",
                onSaved: (v) => diagnosis = v!,
                minLines: 7,
                maxLines: 20,
              ),
              const SizedBox(height: 20),
              Input(
                label: "Операции",
                hint: "Введите операции",
                onSaved: (v) => operations = v!,
                minLines: 7,
                maxLines: 20,
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
      ),
    );
  }
}
