import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:mobile/components/typography/page_title.dart';
import 'package:mobile/feats/components/patient_card.dart';
import 'package:mobile/feats/entities/patient/patient.dart';
import 'package:mobile/router/router.gr.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 12.0),
      child: ListView.builder(
          itemCount: 100,
          itemBuilder: (context, index) {
            if (index == 0) {
              return const Padding(
                padding: EdgeInsets.only(bottom: 2),
                child: _Title(),
              );
            }
            return Padding(
              padding: const EdgeInsets.only(top: 14),
              child: PatientCard(
                patient: Patient.fromJson({
                  "id": "68078a4d-b5af-4c28-ac38-f1837524103d",
                  "last_name": "ivanov",
                  "name": "ivan",
                  "patronymic": "ivanovich",
                  "birthday": "21.11.2000",
                  "consultations": "_",
                  "diagnosis": "_",
                  "operations": "_",
                  "doctor": "3aef522b-7eef-49a0-b417-feb850979d6f"
                }),
              ),
            );
          }),
    );
  }
}

class _Title extends StatelessWidget {
  const _Title({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return PageTitle(
      "Пациенты",
      suffix: GestureDetector(
        onTap: () => AutoRouter.of(context).push(const CreatePatientScreenRoute()),
        child: Padding(
          padding: const EdgeInsets.all(5),
          child: Icon(
            FeatherIcons.plus,
            color: Theme.of(context).primaryColor,
            size: 24,
          ),
        ),
      ),
    );
  }
}
