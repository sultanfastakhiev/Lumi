part of "base_prediction_cubit.dart";

class UploadedFileSelector extends StatelessWidget {
  final Widget Function(BuildContext context, File? file) builder;

  const UploadedFileSelector({Key? key, required this.builder}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocSelector<BasePredictionCubit, BasePredictionState, File?>(
      selector: (state) => state is BasePredictionStateWithFile ? state.file : null,
      builder: builder,
    );
  }
}