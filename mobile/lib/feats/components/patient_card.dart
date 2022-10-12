import 'package:flutter/material.dart';
import 'package:mobile/feats/entities/patient/patient.dart';
import 'package:mobile/utils/formatters.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class PatientCard extends StatelessWidget {
  final Patient patient;

  const PatientCard({
    Key? key,
    required this.patient,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        border: Border.all(color: graySwatch.shade200),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            patient.fullName,
            style: TextStyles.textMdMedium.apply(color: graySwatch.shade900),
          ),
          const SizedBox(height: 10),
          const _Label("Год рождения"),
          _Value(DateFormatters.formatBirthdayWithAge(patient.birthday)),
          if (patient.consultations != null) ...[
            const SizedBox(height: 10),
            const _Label("Консультации"),
            _Value(patient.consultations!),
          ],
          if (patient.diagnosis != null) ...[
            const SizedBox(height: 10),
            const _Label("Диагнозы"),
            _Value(patient.diagnosis!),
          ]
        ],
      ),
    );
  }
}

class _Label extends StatelessWidget {
  final String text;

  const _Label(this.text, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyles.textXsNormal.apply(color: graySwatch.shade400),
    );
  }
}

class _Value extends StatelessWidget {
  final String text;

  const _Value(this.text, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyles.textSmNormal.apply(color: graySwatch.shade600),
      overflow: TextOverflow.ellipsis,
    );
  }
}
