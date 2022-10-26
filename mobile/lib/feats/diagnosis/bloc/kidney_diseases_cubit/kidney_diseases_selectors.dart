part of "kidney_diseases_cubit.dart";

class UploadedFileSelector extends StatelessWidget {
  final Widget Function(BuildContext context, File? file) builder;

  const UploadedFileSelector({Key? key, required this.builder}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocSelector<KidneyDiseasesCubit, KidneyDiseasesState, File?>(
      selector: (state) => state is KidneyDiseasesStateWithFile ? state.file : null,
      builder: builder,
    );
  }
}