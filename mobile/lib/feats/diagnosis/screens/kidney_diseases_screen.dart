import 'package:flutter/material.dart';
import 'package:mobile/components/file_upload.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/components/typography/page_subtitle.dart';
import 'package:mobile/utils/functions.dart';

class KidneyDiseasesScreen extends StatelessWidget {
  const KidneyDiseasesScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: ListView(
        children: [
          const Header("Диагностика"),
          const PageSubtitle("Автоматическая диагностика опасных почечных новобразований"),
          const SizedBox(height: 24),
          FileUpload(
            onTap: () {
              pickPredictionImage(context).then(print);
            },
            text: "чтобы загрузить КТ",
            formatText: "Изображение в JPEG или JPG",
          ),
        ],
      ),
    );
  }
}
