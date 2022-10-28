import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';
import 'package:package_info_plus/package_info_plus.dart';

class AppVersion extends StatelessWidget {
  const AppVersion({Key? key}) : super(key: key);

  Future<String> _getAppFullVersion() async {
    final packageInfo = await PackageInfo.fromPlatform();
    return "${packageInfo.version} (${packageInfo.buildNumber})";
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: _getAppFullVersion(),
      builder: (context, snapshot) {
        final text = snapshot.connectionState == ConnectionState.done ? "Версия ${snapshot.data}" : " ";

        return Text(
          text,
          style: TextStyles.textSmNormal.apply(color: graySwatch.shade500),
        );
      },
    );
  }
}
