import 'package:flutter/material.dart';
import 'package:mobile/feats/auth/entities/user/user.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class UserAvatar extends StatelessWidget {
  final User user;
  final bool online;
  final double radius;

  const UserAvatar(
    this.user, {
    Key? key,
    this.online = false,
    this.radius = 25,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: radius * 2,
      width: radius * 2,
      child: Stack(
        children: [
          CircleAvatar(
            radius: radius,
            backgroundColor: primarySwatch.shade50,
            child: Center(
              child: Text(
                user.abbreviation,
                style: TextStyles.textSmMedium.apply(color: primarySwatch.shade600),
              ),
            ),
          ),
          if (online) const _OnlineCircle(),
        ],
      ),
    );
  }
}

class _OnlineCircle extends StatelessWidget {
  const _OnlineCircle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 2,
      right: 5,
      child: CircleAvatar(
        radius: 5,
        backgroundColor: Colors.white,
        child: Center(
          child: CircleAvatar(
            backgroundColor: successSwatch.shade500,
            radius: 4.5,
          ),
        ),
      ),
    );
  }
}
