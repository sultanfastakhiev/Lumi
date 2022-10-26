import 'package:flutter/material.dart';
import 'package:mobile/utils/theme/text_styles.dart';
import 'package:mobile/utils/theme/theme.dart';

class Prediction extends StatelessWidget {
  final String label;
  final double value;

  const Prediction({
    Key? key,
    required this.label,
    required this.value,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: TextStyles.textSmMedium.apply(color: graySwatch.shade700),
        ),
        SizedBox(
          height: 20,
          child: Row(
            children: [
              // FractionallySizedBox(
              //   widthFactor: value,
              //   child: Container(
              //     height: 8,
              //     decoration: BoxDecoration(
              //       borderRadius: BorderRadius.circular(10),
              //       color: primarySwatch.shade600,
              //     ),
              //   ),
              // ),
              // Expanded(
              //   child: Container(
              //     height: 8,
              //     decoration: BoxDecoration(
              //       borderRadius: BorderRadius.circular(10),
              //       color: primarySwatch.shade50,
              //     ),
              //   ),
              // ),
              Expanded(
                child: Stack(
                  children: [
                    Positioned(
                      top: 7,
                      left: 0,
                      right: 0,
                      child: Container(
                        height: 8,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          color: primarySwatch.shade50,
                        ),
                      ),
                    ),
                    Positioned.fill(
                      top: 7,
                      left: 0,
                      bottom: 6,
                      child: Align(
                        alignment: Alignment.bottomLeft,
                        child: FractionallySizedBox(
                          widthFactor: value,
                          child: Container(
                            height: 8,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              color: primarySwatch.shade600,
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              // Stack(
              //   children: [
              //     Container(
              //       height: 8,
              //       decoration: BoxDecoration(
              //         borderRadius: BorderRadius.circular(10),
              //         color: primarySwatch.shade50,
              //       ),
              //     ),
              //     FractionallySizedBox(
              //       widthFactor: value,
              //       child: Container(
              //         height: 8,
              //         decoration: BoxDecoration(
              //           borderRadius: BorderRadius.circular(10),
              //           color: primarySwatch.shade600,
              //         ),
              //       ),
              //     ),
              //   ],
              // ),
              const SizedBox(width: 12),
              SizedBox(
                width: 37,
                child: Align(
                  alignment: Alignment.centerRight,
                  child: Text(
                    "${(value * 100).toInt()}%",
                    style: TextStyles.textSmMedium.apply(color: graySwatch.shade600),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
