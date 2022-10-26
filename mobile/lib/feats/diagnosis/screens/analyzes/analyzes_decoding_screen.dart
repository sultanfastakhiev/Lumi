// ignore_for_file: use_build_context_synchronously

import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/components/button/primary.dart';
import 'package:mobile/components/file_preview.dart';
import 'package:mobile/components/file_upload.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/components/typography/page_subtitle.dart';
import 'package:mobile/feats/diagnosis/api/decipher_analyzes_endpoint.dart';
import 'package:mobile/feats/diagnosis/bloc/base_prediction_cubit/base_prediction_cubit.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/router/router.gr.dart';
import 'package:mobile/utils/functions.dart';

class AnalyzesDecodingScreen extends StatelessWidget {
  const AnalyzesDecodingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => BasePredictionCubit(
        endpoint: locator<DecipherAnalyzesEndpoint>(),
        pushResultPage: (file, predictions) {
          AutoRouter.of(context).push(DecipherAnalysesResultsScreenRoute(predictions: predictions));
        },
      ),
      child: EmptyLayout(
        child: ListView(
          children: [
            const Header("Расшифровка анализов"),
            const PageSubtitle("Автоматическая расшифровка анализов"),
            const SizedBox(height: 24),
            UploadedFileSelector(
              builder: (context, file) {
                if (file == null) {
                  return FileUpload(
                    onTap: () async {
                      final file = await pickPredictionCsv(context);
                      if (file != null) context.read<BasePredictionCubit>().uploadFile(file);
                    },
                    text: "чтобы загрузить анилизы",
                    formatText: "Таблица в формате CSV",
                  );
                }

                return FilePreview(
                  file: file,
                  onTap: () => context.read<BasePredictionCubit>().removeFile(),
                );
              },
            ),
            const SizedBox(height: 12),
            BlocBuilder<BasePredictionCubit, BasePredictionState>(
              builder: (context, state) {
                return PrimaryButton(
                  text: "Диагностировать",
                  disabled: state is! BasePredictionStateWithFile,
                  loading: state is FetchingPredictionsBasePredictionState,
                  fullWidth: true,
                  onTap: () => context.read<BasePredictionCubit>().diagnose(context),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
