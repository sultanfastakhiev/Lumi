import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:mobile/components/file_upload.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/image_preview.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/components/typography/page_subtitle.dart';
import 'package:mobile/utils/functions.dart';

class KidneyDiseasesScreen extends StatefulWidget {
  const KidneyDiseasesScreen({Key? key}) : super(key: key);

  @override
  State<KidneyDiseasesScreen> createState() => _KidneyDiseasesScreenState();
}

class _KidneyDiseasesScreenState extends State<KidneyDiseasesScreen> {
  XFile? file;

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: ListView(
        children: [
          const Header("Диагностика"),
          const PageSubtitle("Автоматическая диагностика опасных почечных новобразований"),
          const SizedBox(height: 24),
          if (file == null)
            FileUpload(
              onTap: () async {
                final image = await pickPredictionImage(context);
                if (image != null) setState(() => file = image);
              },
              text: "чтобы загрузить КТ",
              formatText: "Изображение в JPEG или JPG",
            )
          else
            ImagePreview(
              file!,
              onTap: () => setState(() => file = null),
            ),
        ],
      ),
    );
  }
}
