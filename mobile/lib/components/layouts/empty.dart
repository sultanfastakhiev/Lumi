import 'package:flutter/material.dart';

class EmptyLayout extends StatelessWidget {
  final Widget child;
  final EdgeInsets padding;

  const EmptyLayout({
    Key? key,
    required this.child,
    this.padding = const EdgeInsets.symmetric(horizontal: 16),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => FocusScope.of(context).unfocus(),
      child: Scaffold(
        backgroundColor: Theme.of(context).backgroundColor,
        body: Padding(
          padding: padding,
          child: child,
        ),
      ),
    );
  }
}
