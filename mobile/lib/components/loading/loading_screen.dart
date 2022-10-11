import 'package:flutter/material.dart';
import 'package:mobile/components/loading/loading_view.dart';

class LoadingScreen extends StatelessWidget {
  const LoadingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(body: LoadingView());
  }
}
