import 'package:flutter/material.dart';

// Colors
const primarySwatch = MaterialColor(
  0xFF1570EF,
  <int, Color>{
    25: Color(0xFFF5FAFF),
    50: Color(0xFFEFF8FF),
    100: Color(0xFFD1E9FF),
    200: Color(0xFFB2DDFF),
    300: Color(0xFF84CAFF),
    400: Color(0xFF53B1FD),
    500: Color(0xFF2E90FA),
    600: Color(0xFF1570EF),
    700: Color(0xFF175CD3),
    800: Color(0xFF1849A9),
    900: Color(0xFF194185),
  },
);

const graySwatch = MaterialColor(
  0xFF101828,
  <int, Color>{
    25: Color(0xFFFCFCFD),
    50: Color(0xFFF9FAFB),
    100: Color(0xFFF2F4F7),
    200: Color(0xFFEAECF0),
    300: Color(0xFFD0D5DD),
    400: Color(0xFF98A2B3),
    500: Color(0xFF667085),
    600: Color(0xFF475467),
    700: Color(0xFF344054),
    800: Color(0xFF1D2939),
    900: Color(0xFF101828),
  },
);

const successSwatch = MaterialColor(
  0xFF12B76A,
  <int, Color>{
    500: Color(0xFF12B76A),
  },
);

final lightTheme = ThemeData(
  primarySwatch: primarySwatch,
  backgroundColor: Colors.white,
  visualDensity: VisualDensity.standard,
  fontFamily: 'Inter',
);

