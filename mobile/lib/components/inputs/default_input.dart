import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class Input extends StatelessWidget {
  final String? hint;
  final String label;
  final TextInputType? keyboardType;
  final TextInputAction? textInputAction;
  final String? Function(String?)? validator;
  final void Function(String?)? onSaved;
  final bool expandInput;
  final bool? enabled;
  final TextEditingController? controller;
  final String? initialValue;
  final int? minLines;
  final int? maxLines;

  const Input({
    Key? key,
    this.hint,
    required this.label,
    this.keyboardType,
    this.textInputAction,
    this.validator,
    this.onSaved,
    this.expandInput = true,
    this.enabled,
    this.controller,
    this.initialValue,
    this.minLines,
    this.maxLines,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: expandInput ? null : 70,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: TextStyles.textSmMedium.apply(color: graySwatch.shade700),
          ),
          const SizedBox(height: 6),
          TextFormField(
            initialValue: initialValue,
            controller: controller,
            enabled: enabled,
            validator: validator,
            onSaved: onSaved,
            keyboardType: keyboardType,
            textInputAction: textInputAction,
            style: TextStyles.textMdNormal.apply(color: graySwatch.shade900),
            minLines: minLines,
            maxLines: maxLines,
            decoration: InputDecoration(
              isDense: true,
              contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
              hintText: hint,
              errorStyle: const TextStyle(height: 0),
              errorBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: const BorderSide(
                  color: Color(0xFFFDA29B),
                  width: 1,
                ),
              ),
              focusedErrorBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: const BorderSide(
                  color: Color(0xFFF97066),
                  width: 1,
                ),
              ),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide(
                  color: graySwatch.shade300,
                  width: 1,
                ),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide(
                  color: primarySwatch.shade600,
                  width: 1,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
