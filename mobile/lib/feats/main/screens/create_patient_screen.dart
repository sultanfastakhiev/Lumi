import 'package:flutter/material.dart';
import 'package:mobile/components/layouts/empty.dart';

class CreatePatientScreen extends StatelessWidget {
  const CreatePatientScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const EmptyLayout(
      child: Text("patient"),
    );
  }
}
