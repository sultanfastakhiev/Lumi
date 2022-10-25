import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:mobile/components/error/error_view.dart';
import 'package:mobile/components/loading/main_loading_view.dart';
import 'package:mobile/components/typography/page_title.dart';
import 'package:mobile/feats/main/components/patient_card.dart';
import 'package:mobile/feats/main/bloc/patients_list_cubit/patients_list_cubit.dart';
import 'package:mobile/feats/main/screens/home_empty_state_screen.dart';
import 'package:mobile/router/router.gr.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<PatientsListCubit, PatientsListState>(builder: (context, state) {
      if (state is IdlePatientsListState) {
        if (state.isEmpty) return const HomeEmptyState();
        return Scrollbar(
          child: Padding(
            padding: const EdgeInsets.only(top: 12.0),
            child: ListView.builder(
              itemCount: state.patients.length + 1,
              itemBuilder: (context, index) {
                if (index == 0) {
                  return const Padding(
                    padding: EdgeInsets.only(bottom: 2),
                    child: _Title(),
                  );
                }
                return Padding(
                  padding: const EdgeInsets.only(top: 14, right: 16, left: 16),
                  child: PatientCard(patient: state.patients[index - 1]),
                );
              },
            ),
          ),
        );
      }
      if (state is ErrorPatientsListState) {
        return ErrorView(state.failure.message);
      }
      return const MainLoadingView();
    });
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
