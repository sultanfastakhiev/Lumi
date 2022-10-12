import 'package:flutter/material.dart';
import 'package:mobile/components/error/error_text.dart';

class MainErrorView extends StatelessWidget {
  final String error;

  const MainErrorView(this.error, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 60),
      child: Center(
        child: ErrorText(error),
      ),
    );
  }
}
