import 'package:flutter/material.dart';
import 'package:mobile/components/error/error_text.dart';

class ErrorView extends StatelessWidget {
  final String error;

  const ErrorView(this.error, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ErrorText(error),
    );
  }
}
