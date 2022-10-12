import 'package:flutter/material.dart';

class EmptyLayout extends StatelessWidget {
  final Widget child;
  final EdgeInsets padding;
  final Widget? bottomNavBar;

  const EmptyLayout({
    Key? key,
    required this.child,
    this.padding = const EdgeInsets.symmetric(horizontal: 16),
    this.bottomNavBar,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => FocusScope.of(context).unfocus(),
      child: Scaffold(
        bottomNavigationBar: bottomNavBar,
        backgroundColor: Theme.of(context).backgroundColor,
        body: SafeArea(
          child: Padding(
            padding: padding,
            child: child,
          ),
        ),
      ),
    );
  }
}
