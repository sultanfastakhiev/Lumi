import 'package:flutter/material.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/layouts/empty.dart';
import 'package:mobile/components/typography/page_subtitle.dart';

class AnalyzesDecodingScreen extends StatelessWidget {
  const AnalyzesDecodingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: ListView(
        children: [
          const Header("Расшифровка анализов"),
          const PageSubtitle("Автоматическая расшифровка анализов"),
          const SizedBox(height: 24),
        ],
      ),
    );
  }
}
