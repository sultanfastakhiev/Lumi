import 'package:flutter/material.dart';
import 'package:mobile/components/loading/loading_view.dart';

class MainLoadingView extends StatelessWidget {
  const MainLoadingView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.only(top: 60),
      child: LoadingView(),
    );
  }
}
