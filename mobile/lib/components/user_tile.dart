import 'package:flutter/material.dart';
import 'package:mobile/components/avatar.dart';
import 'package:mobile/feats/auth/entities/user/user.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class UserTile extends StatelessWidget {
  final User user;
  final EdgeInsets? padding;

  const UserTile(this.user, {Key? key, this.padding}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding ?? EdgeInsets.zero,
      child: Row(
        children: [
          UserAvatar(user, online: true),
          const SizedBox(width: 16),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                user.fullName,
                style: TextStyles.textMdMedium.apply(color: graySwatch.shade700),
              ),
              Text(
                "Доктор",
                style: TextStyles.textSmNormal.apply(color: graySwatch.shade400),
              ),
            ],
          )
        ],
      ),
    );
  }
}
