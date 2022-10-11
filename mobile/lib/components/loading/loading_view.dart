import 'package:flutter/material.dart';
import 'package:mobile/components/loading/spinner.dart';

class LoadingView extends StatelessWidget {
  const LoadingView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Center(child: Spinner());
  }
}
