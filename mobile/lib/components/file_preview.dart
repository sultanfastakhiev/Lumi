import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:mobile/components/progress_bar.dart';
import 'package:mobile/utils/functions.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class FilePreview extends StatelessWidget {
  final File file;
  final void Function() onTap;

  const FilePreview({
    Key? key,
    required this.file,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          border: Border.all(color: primarySwatch.shade600, width: 1),
          borderRadius: BorderRadius.circular(8),
        ),
        padding: const EdgeInsets.all(16),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            CircleAvatar(
              radius: 23,
              backgroundColor: primarySwatch.shade50,
              child: CircleAvatar(
                radius: 17,
                backgroundColor: primarySwatch.shade100,
                child: Icon(
                  FeatherIcons.file,
                  color: primarySwatch.shade600,
                  size: 20,
                ),
              ),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    getFileName(file),
                    style: TextStyles.textSmMedium.apply(color: graySwatch.shade700),
                  ),
                  Text(
                    getFileSize(file),
                    style: TextStyles.textSmNormal.apply(color: graySwatch.shade500),
                  ),
                  const SizedBox(height: 4),
                  const ProgressBar(1),
                ],
              ),
            ),
            const SizedBox(width: 4),
            CircleAvatar(
              radius: 8,
              backgroundColor: primarySwatch.shade600,
              child: const Icon(FeatherIcons.check, size: 10),
            )
          ],
        ),
      ),
    );
  }
}
