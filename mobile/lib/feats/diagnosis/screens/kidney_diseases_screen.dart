import 'package:flutter/material.dart';
import 'package:mobile/components/header.dart';
import 'package:mobile/components/layouts/empty.dart';

class KidneyDiseasesScreen extends StatelessWidget {
  const KidneyDiseasesScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return EmptyLayout(
      child: ListView(
        children: [
          const Header("Диагностика"),
        ],
      ),
    );
  }
}
