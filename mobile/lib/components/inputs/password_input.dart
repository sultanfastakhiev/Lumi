import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class PasswordInput extends StatefulWidget {
  final String? hint;
  final String label;
  final TextInputAction? textInputAction;
  final String? Function(String?)? validator;
  final void Function(String?)? onSaved;
  final void Function(String?)? onChanged;
  final bool expandInput;

  const PasswordInput({
    Key? key,
    this.hint,
    required this.label,
    this.textInputAction,
    this.validator,
    this.onSaved,
    this.onChanged,
    this.expandInput = true,
  }) : super(key: key);

  @override
  State<PasswordInput> createState() => _PasswordInputState();
}

class _PasswordInputState extends State<PasswordInput> {
  bool show = false;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: widget.expandInput ? null : 74,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            widget.label,
            style: TextStyles.textSmMedium.apply(color: graySwatch.shade700),
          ),
          const SizedBox(height: 6),
          TextFormField(
            validator: widget.validator,
            onSaved: widget.onSaved,
            onChanged: widget.onChanged,
            style: TextStyles.textMdNormal.apply(color: graySwatch.shade900),
            decoration: InputDecoration(
              contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
              hintText: widget.hint,
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide(
                  color: graySwatch.shade300,
                  width: 1,
                ),
              ),
              errorStyle: const TextStyle(height: 0),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide(
                  color: primarySwatch.shade600,
                  width: 1,
                ),
              ),
              suffixIcon: GestureDetector(
                onTap: () => setState(() => show = !show),
                child: Icon(
                  show ? FeatherIcons.eyeOff : FeatherIcons.eye,
                  size: 16,
                ),
              ),
            ),
            obscureText: !show,
          ),
        ],
      ),
    );
  }
}
