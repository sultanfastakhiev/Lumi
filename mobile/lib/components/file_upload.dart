import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class FileUpload extends StatelessWidget {
  final void Function() onTap;
  final String text;
  final String formatText;

  const FileUpload({
    Key? key,
    required this.onTap,
    required this.text,
    required this.formatText,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: graySwatch.shade300, width: 1),
        borderRadius: BorderRadius.circular(8),
      ),
      child: GestureDetector(
        onTap: onTap,
        child: Material(
          color: Colors.transparent,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                CircleAvatar(
                  radius: 23,
                  backgroundColor: graySwatch.shade50,
                  child: CircleAvatar(
                    radius: 17,
                    backgroundColor: graySwatch.shade100,
                    child: Icon(
                      FeatherIcons.uploadCloud,
                      color: graySwatch.shade600,
                      size: 20,
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Нажмите",
                      style: TextStyles.textSmMedium.apply(color: primarySwatch.shade700),
                    ),
                    const SizedBox(width: 4),
                    Text(
                      text,
                      style: TextStyles.textSmNormal.apply(color: graySwatch.shade500),
                    )
                  ],
                ),
                const SizedBox(height: 4),
                Text(
                  formatText,
                  style: TextStyles.textXsNormal.apply(color: graySwatch.shade500),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
