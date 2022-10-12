import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:mobile/feats/main/screens/main_screen.dart';
import 'package:mobile/utils/theme/theme.dart';

class BottomNavBar extends StatelessWidget {
  final MainPage page;
  final void Function(MainPage page) onTap;

  const BottomNavBar({
    Key? key,
    required this.page,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        width: double.infinity,
        height: 60,
        decoration: BoxDecoration(
          border: Border(
            top: BorderSide(color: graySwatch.shade100),
          ),
        ),
        child: Center(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                _Item(
                  onTap: () => onTap(MainPage.home),
                  active: page == MainPage.home,
                  icon: FeatherIcons.home,
                ),
                _Item(
                  onTap: () => onTap(MainPage.decoding),
                  active: page == MainPage.decoding,
                  icon: FeatherIcons.search,
                ),
                _Item(
                  onTap: () => onTap(MainPage.account),
                  active: page == MainPage.account,
                  icon: FeatherIcons.user,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _Item extends StatefulWidget {
  final IconData icon;
  final bool active;
  final void Function() onTap;

  const _Item({
    Key? key,
    required this.icon,
    required this.active,
    required this.onTap,
  }) : super(key: key);

  @override
  State<_Item> createState() => _ItemState();
}

class _ItemState extends State<_Item> with SingleTickerProviderStateMixin {
  late final _animationController = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 100),
  );

  late final Animation<Color?> _animation;

  @override
  void initState() {
    super.initState();
    _animation = ColorTween(
      begin: graySwatch.shade300,
      end: primarySwatch.shade600,
    ).animate(CurvedAnimation(parent: _animationController, curve: Curves.easeInOut));

    if (widget.active) _animationController.animateTo(1, duration: Duration.zero);
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  void didUpdateWidget(_Item oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.active) {
      _animationController.forward();
    } else {
      _animationController.reverse();
    }
  }

  void onPressed() {
    if (!widget.active) widget.onTap();
  }

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: SizedBox(
        height: 60,
        child: InkWell(
          splashColor: Colors.transparent,
          highlightColor: Colors.transparent,
          onTap: onPressed,
          child: AnimatedBuilder(
            animation: _animation,
            builder: (context, _) {
              return Icon(
                widget.icon,
                size: 26,
                color: _animation.value,
              );
            },
          ),
        ),
      ),
    );
  }
}
