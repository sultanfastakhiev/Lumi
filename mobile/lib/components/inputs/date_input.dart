import 'package:flutter/material.dart';
import 'package:mobile/components/inputs/default_input.dart';
import 'package:mobile/utils/formatters.dart';

class DateInput extends StatefulWidget {
  final String? hint;
  final String label;
  final TextInputType? keyboardType;
  final TextInputAction? textInputAction;
  final String? Function(DateTime?)? validator;
  final void Function(DateTime?)? onSaved;
  final bool expandInput;

  const DateInput({
    Key? key,
    this.hint,
    required this.label,
    this.keyboardType,
    this.textInputAction,
    this.validator,
    this.onSaved,
    this.expandInput = true,
  }) : super(key: key);

  @override
  State<DateInput> createState() => _DateInputState();
}

class _DateInputState extends State<DateInput> {
  late final TextEditingController controller;

  @override
  void initState() {
    super.initState();
    controller = TextEditingController();
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  void handleTap() async {
    final newDate = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(1900),
      lastDate: DateTime(2100),
    );
    if (newDate != null) controller.text = DateFormatters.formatToBirthday(newDate);
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: handleTap,
      child: AbsorbPointer(
        absorbing: true,
        child: Input(
          controller: controller,
          hint: widget.hint,
          label: widget.label,
          keyboardType: widget.keyboardType,
          textInputAction: widget.textInputAction,
          validator: widget.validator != null ? (v) {
            if (v == null || v.length != 10) return widget.validator!(null);
            return widget.validator!(DateFormatters.parseBirthday(v));
          } : null,
          onSaved: widget.onSaved != null ? (v) => widget.onSaved!(DateFormatters.parseBirthday(v!)) : null,
          expandInput: widget.expandInput,
        ),
      ),
    );
  }
}
