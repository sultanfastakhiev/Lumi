import 'package:curved_progress_bar/curved_progress_bar.dart';
import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/theme.dart';

class Spinner extends StatelessWidget {
  const Spinner({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 32,
      height: 32,
      child: CurvedCircularProgressIndicator(
        backgroundColor: primarySwatch.shade50,
        color: primarySwatch.shade600,
        strokeWidth: 4,
      ),
    );
  }
}
