// **************************************************************************
// AutoRouteGenerator
// **************************************************************************

// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouteGenerator
// **************************************************************************
//
// ignore_for_file: type=lint

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'dart:io' as _i24;

import 'package:auto_route/auto_route.dart' as _i22;
import 'package:flutter/material.dart' as _i23;

import '../feats/account/components/feedback_screen.dart' as _i19;
import '../feats/account/screens/about_app_screen.dart' as _i18;
import '../feats/account/screens/password_screen.dart' as _i17;
import '../feats/account/screens/privacy_policy_screen.dart' as _i20;
import '../feats/account/screens/profile_screen.dart' as _i16;
import '../feats/account/screens/terms_of_use_screen.dart' as _i21;
import '../feats/auth/screens/login_screen.dart' as _i2;
import '../feats/auth/screens/signup_screen_stage_1.dart' as _i3;
import '../feats/auth/screens/signup_screen_stage_2.dart' as _i4;
import '../feats/diagnosis/entities/prediction/prediction.dart' as _i25;
import '../feats/diagnosis/screens/analyzes/analyzes_decoding_results_screen.dart'
    as _i13;
import '../feats/diagnosis/screens/analyzes/analyzes_decoding_screen.dart'
    as _i9;
import '../feats/diagnosis/screens/brain/brain_tumors_results_screen.dart'
    as _i15;
import '../feats/diagnosis/screens/brain/brain_tumors_screen.dart' as _i11;
import '../feats/diagnosis/screens/kidney/kidney_diseases_results_screen.dart'
    as _i12;
import '../feats/diagnosis/screens/kidney/kidney_diseases_screen.dart' as _i8;
import '../feats/diagnosis/screens/skin/skin_cancer_results_screen.dart'
    as _i14;
import '../feats/diagnosis/screens/skin/skin_cancer_screen.dart' as _i10;
import '../feats/init/screen/init_screen.dart' as _i1;
import '../feats/main/screens/create_patient_screen.dart' as _i6;
import '../feats/main/screens/main_screen.dart' as _i5;
import '../feats/main/screens/patient_detail_screen.dart' as _i7;

class AppRouter extends _i22.RootStackRouter {
  AppRouter([_i23.GlobalKey<_i23.NavigatorState>? navigatorKey])
      : super(navigatorKey);

  @override
  final Map<String, _i22.PageFactory> pagesMap = {
    InitScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i1.InitScreen(),
      );
    },
    LoginScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i2.LoginScreen(),
      );
    },
    FirstStageSignupScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i3.FirstStageSignupScreen(),
      );
    },
    SecondStageSignupScreenRoute.name: (routeData) {
      final args = routeData.argsAs<SecondStageSignupScreenRouteArgs>();
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: _i4.SecondStageSignupScreen(
          key: args.key,
          username: args.username,
          password: args.password,
        ),
      );
    },
    MainScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i5.MainScreen(),
      );
    },
    CreatePatientScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i6.CreatePatientScreen(),
      );
    },
    PatientDetailScreenRoute.name: (routeData) {
      final args = routeData.argsAs<PatientDetailScreenRouteArgs>();
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: _i7.PatientDetailScreen(
          key: args.key,
          id: args.id,
        ),
      );
    },
    KidneyDiseasesScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i8.KidneyDiseasesScreen(),
      );
    },
    AnalyzesDecodingScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i9.AnalyzesDecodingScreen(),
      );
    },
    SkinCancerScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i10.SkinCancerScreen(),
      );
    },
    BrainTumorsScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i11.BrainTumorsScreen(),
      );
    },
    KidneyDiseasesResultsScreenRoute.name: (routeData) {
      final args = routeData.argsAs<KidneyDiseasesResultsScreenRouteArgs>();
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: _i12.KidneyDiseasesResultsScreen(
          key: args.key,
          image: args.image,
          predictions: args.predictions,
        ),
      );
    },
    DecipherAnalysesResultsScreenRoute.name: (routeData) {
      final args = routeData.argsAs<DecipherAnalysesResultsScreenRouteArgs>();
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: _i13.DecipherAnalysesResultsScreen(
          key: args.key,
          predictions: args.predictions,
        ),
      );
    },
    SkinCancerResultsScreenRoute.name: (routeData) {
      final args = routeData.argsAs<SkinCancerResultsScreenRouteArgs>();
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: _i14.SkinCancerResultsScreen(
          key: args.key,
          image: args.image,
          predictions: args.predictions,
        ),
      );
    },
    BrainTumorsResultsScreenRoute.name: (routeData) {
      final args = routeData.argsAs<BrainTumorsResultsScreenRouteArgs>();
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: _i15.BrainTumorsResultsScreen(
          key: args.key,
          image: args.image,
          predictions: args.predictions,
        ),
      );
    },
    ProfileScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i16.ProfileScreen(),
      );
    },
    PasswordScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i17.PasswordScreen(),
      );
    },
    AboutAppScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i18.AboutAppScreen(),
      );
    },
    FeedbackScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i19.FeedbackScreen(),
      );
    },
    PrivacyPolicyScreenRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i20.PrivacyPolicyScreen(),
      );
    },
    TermsOfUseRoute.name: (routeData) {
      return _i22.CupertinoPageX<dynamic>(
        routeData: routeData,
        child: const _i21.TermsOfUse(),
      );
    },
  };

  @override
  List<_i22.RouteConfig> get routes => [
        _i22.RouteConfig(
          InitScreenRoute.name,
          path: '/',
        ),
        _i22.RouteConfig(
          LoginScreenRoute.name,
          path: '/login-screen',
        ),
        _i22.RouteConfig(
          FirstStageSignupScreenRoute.name,
          path: '/first-stage-signup-screen',
        ),
        _i22.RouteConfig(
          SecondStageSignupScreenRoute.name,
          path: '/second-stage-signup-screen',
        ),
        _i22.RouteConfig(
          MainScreenRoute.name,
          path: '/main-screen',
        ),
        _i22.RouteConfig(
          CreatePatientScreenRoute.name,
          path: '/create-patient-screen',
        ),
        _i22.RouteConfig(
          PatientDetailScreenRoute.name,
          path: '/patient-detail-screen',
        ),
        _i22.RouteConfig(
          KidneyDiseasesScreenRoute.name,
          path: '/kidney-diseases-screen',
        ),
        _i22.RouteConfig(
          AnalyzesDecodingScreenRoute.name,
          path: '/analyzes-decoding-screen',
        ),
        _i22.RouteConfig(
          SkinCancerScreenRoute.name,
          path: '/skin-cancer-screen',
        ),
        _i22.RouteConfig(
          BrainTumorsScreenRoute.name,
          path: '/brain-tumors-screen',
        ),
        _i22.RouteConfig(
          KidneyDiseasesResultsScreenRoute.name,
          path: '/kidney-diseases-results-screen',
        ),
        _i22.RouteConfig(
          DecipherAnalysesResultsScreenRoute.name,
          path: '/decipher-analyses-results-screen',
        ),
        _i22.RouteConfig(
          SkinCancerResultsScreenRoute.name,
          path: '/skin-cancer-results-screen',
        ),
        _i22.RouteConfig(
          BrainTumorsResultsScreenRoute.name,
          path: '/brain-tumors-results-screen',
        ),
        _i22.RouteConfig(
          ProfileScreenRoute.name,
          path: '/profile-screen',
        ),
        _i22.RouteConfig(
          PasswordScreenRoute.name,
          path: '/password-screen',
        ),
        _i22.RouteConfig(
          AboutAppScreenRoute.name,
          path: '/about-app-screen',
        ),
        _i22.RouteConfig(
          FeedbackScreenRoute.name,
          path: '/feedback-screen',
        ),
        _i22.RouteConfig(
          PrivacyPolicyScreenRoute.name,
          path: '/privacy-policy-screen',
        ),
        _i22.RouteConfig(
          TermsOfUseRoute.name,
          path: '/terms-of-use',
        ),
      ];
}

/// generated route for
/// [_i1.InitScreen]
class InitScreenRoute extends _i22.PageRouteInfo<void> {
  const InitScreenRoute()
      : super(
          InitScreenRoute.name,
          path: '/',
        );

  static const String name = 'InitScreenRoute';
}

/// generated route for
/// [_i2.LoginScreen]
class LoginScreenRoute extends _i22.PageRouteInfo<void> {
  const LoginScreenRoute()
      : super(
          LoginScreenRoute.name,
          path: '/login-screen',
        );

  static const String name = 'LoginScreenRoute';
}

/// generated route for
/// [_i3.FirstStageSignupScreen]
class FirstStageSignupScreenRoute extends _i22.PageRouteInfo<void> {
  const FirstStageSignupScreenRoute()
      : super(
          FirstStageSignupScreenRoute.name,
          path: '/first-stage-signup-screen',
        );

  static const String name = 'FirstStageSignupScreenRoute';
}

/// generated route for
/// [_i4.SecondStageSignupScreen]
class SecondStageSignupScreenRoute
    extends _i22.PageRouteInfo<SecondStageSignupScreenRouteArgs> {
  SecondStageSignupScreenRoute({
    _i23.Key? key,
    required String username,
    required String password,
  }) : super(
          SecondStageSignupScreenRoute.name,
          path: '/second-stage-signup-screen',
          args: SecondStageSignupScreenRouteArgs(
            key: key,
            username: username,
            password: password,
          ),
        );

  static const String name = 'SecondStageSignupScreenRoute';
}

class SecondStageSignupScreenRouteArgs {
  const SecondStageSignupScreenRouteArgs({
    this.key,
    required this.username,
    required this.password,
  });

  final _i23.Key? key;

  final String username;

  final String password;

  @override
  String toString() {
    return 'SecondStageSignupScreenRouteArgs{key: $key, username: $username, password: $password}';
  }
}

/// generated route for
/// [_i5.MainScreen]
class MainScreenRoute extends _i22.PageRouteInfo<void> {
  const MainScreenRoute()
      : super(
          MainScreenRoute.name,
          path: '/main-screen',
        );

  static const String name = 'MainScreenRoute';
}

/// generated route for
/// [_i6.CreatePatientScreen]
class CreatePatientScreenRoute extends _i22.PageRouteInfo<void> {
  const CreatePatientScreenRoute()
      : super(
          CreatePatientScreenRoute.name,
          path: '/create-patient-screen',
        );

  static const String name = 'CreatePatientScreenRoute';
}

/// generated route for
/// [_i7.PatientDetailScreen]
class PatientDetailScreenRoute
    extends _i22.PageRouteInfo<PatientDetailScreenRouteArgs> {
  PatientDetailScreenRoute({
    _i23.Key? key,
    required String id,
  }) : super(
          PatientDetailScreenRoute.name,
          path: '/patient-detail-screen',
          args: PatientDetailScreenRouteArgs(
            key: key,
            id: id,
          ),
        );

  static const String name = 'PatientDetailScreenRoute';
}

class PatientDetailScreenRouteArgs {
  const PatientDetailScreenRouteArgs({
    this.key,
    required this.id,
  });

  final _i23.Key? key;

  final String id;

  @override
  String toString() {
    return 'PatientDetailScreenRouteArgs{key: $key, id: $id}';
  }
}

/// generated route for
/// [_i8.KidneyDiseasesScreen]
class KidneyDiseasesScreenRoute extends _i22.PageRouteInfo<void> {
  const KidneyDiseasesScreenRoute()
      : super(
          KidneyDiseasesScreenRoute.name,
          path: '/kidney-diseases-screen',
        );

  static const String name = 'KidneyDiseasesScreenRoute';
}

/// generated route for
/// [_i9.AnalyzesDecodingScreen]
class AnalyzesDecodingScreenRoute extends _i22.PageRouteInfo<void> {
  const AnalyzesDecodingScreenRoute()
      : super(
          AnalyzesDecodingScreenRoute.name,
          path: '/analyzes-decoding-screen',
        );

  static const String name = 'AnalyzesDecodingScreenRoute';
}

/// generated route for
/// [_i10.SkinCancerScreen]
class SkinCancerScreenRoute extends _i22.PageRouteInfo<void> {
  const SkinCancerScreenRoute()
      : super(
          SkinCancerScreenRoute.name,
          path: '/skin-cancer-screen',
        );

  static const String name = 'SkinCancerScreenRoute';
}

/// generated route for
/// [_i11.BrainTumorsScreen]
class BrainTumorsScreenRoute extends _i22.PageRouteInfo<void> {
  const BrainTumorsScreenRoute()
      : super(
          BrainTumorsScreenRoute.name,
          path: '/brain-tumors-screen',
        );

  static const String name = 'BrainTumorsScreenRoute';
}

/// generated route for
/// [_i12.KidneyDiseasesResultsScreen]
class KidneyDiseasesResultsScreenRoute
    extends _i22.PageRouteInfo<KidneyDiseasesResultsScreenRouteArgs> {
  KidneyDiseasesResultsScreenRoute({
    _i23.Key? key,
    required _i24.File image,
    required List<_i25.Prediction> predictions,
  }) : super(
          KidneyDiseasesResultsScreenRoute.name,
          path: '/kidney-diseases-results-screen',
          args: KidneyDiseasesResultsScreenRouteArgs(
            key: key,
            image: image,
            predictions: predictions,
          ),
        );

  static const String name = 'KidneyDiseasesResultsScreenRoute';
}

class KidneyDiseasesResultsScreenRouteArgs {
  const KidneyDiseasesResultsScreenRouteArgs({
    this.key,
    required this.image,
    required this.predictions,
  });

  final _i23.Key? key;

  final _i24.File image;

  final List<_i25.Prediction> predictions;

  @override
  String toString() {
    return 'KidneyDiseasesResultsScreenRouteArgs{key: $key, image: $image, predictions: $predictions}';
  }
}

/// generated route for
/// [_i13.DecipherAnalysesResultsScreen]
class DecipherAnalysesResultsScreenRoute
    extends _i22.PageRouteInfo<DecipherAnalysesResultsScreenRouteArgs> {
  DecipherAnalysesResultsScreenRoute({
    _i23.Key? key,
    required List<_i25.Prediction> predictions,
  }) : super(
          DecipherAnalysesResultsScreenRoute.name,
          path: '/decipher-analyses-results-screen',
          args: DecipherAnalysesResultsScreenRouteArgs(
            key: key,
            predictions: predictions,
          ),
        );

  static const String name = 'DecipherAnalysesResultsScreenRoute';
}

class DecipherAnalysesResultsScreenRouteArgs {
  const DecipherAnalysesResultsScreenRouteArgs({
    this.key,
    required this.predictions,
  });

  final _i23.Key? key;

  final List<_i25.Prediction> predictions;

  @override
  String toString() {
    return 'DecipherAnalysesResultsScreenRouteArgs{key: $key, predictions: $predictions}';
  }
}

/// generated route for
/// [_i14.SkinCancerResultsScreen]
class SkinCancerResultsScreenRoute
    extends _i22.PageRouteInfo<SkinCancerResultsScreenRouteArgs> {
  SkinCancerResultsScreenRoute({
    _i23.Key? key,
    required _i24.File image,
    required List<_i25.Prediction> predictions,
  }) : super(
          SkinCancerResultsScreenRoute.name,
          path: '/skin-cancer-results-screen',
          args: SkinCancerResultsScreenRouteArgs(
            key: key,
            image: image,
            predictions: predictions,
          ),
        );

  static const String name = 'SkinCancerResultsScreenRoute';
}

class SkinCancerResultsScreenRouteArgs {
  const SkinCancerResultsScreenRouteArgs({
    this.key,
    required this.image,
    required this.predictions,
  });

  final _i23.Key? key;

  final _i24.File image;

  final List<_i25.Prediction> predictions;

  @override
  String toString() {
    return 'SkinCancerResultsScreenRouteArgs{key: $key, image: $image, predictions: $predictions}';
  }
}

/// generated route for
/// [_i15.BrainTumorsResultsScreen]
class BrainTumorsResultsScreenRoute
    extends _i22.PageRouteInfo<BrainTumorsResultsScreenRouteArgs> {
  BrainTumorsResultsScreenRoute({
    _i23.Key? key,
    required _i24.File image,
    required List<_i25.Prediction> predictions,
  }) : super(
          BrainTumorsResultsScreenRoute.name,
          path: '/brain-tumors-results-screen',
          args: BrainTumorsResultsScreenRouteArgs(
            key: key,
            image: image,
            predictions: predictions,
          ),
        );

  static const String name = 'BrainTumorsResultsScreenRoute';
}

class BrainTumorsResultsScreenRouteArgs {
  const BrainTumorsResultsScreenRouteArgs({
    this.key,
    required this.image,
    required this.predictions,
  });

  final _i23.Key? key;

  final _i24.File image;

  final List<_i25.Prediction> predictions;

  @override
  String toString() {
    return 'BrainTumorsResultsScreenRouteArgs{key: $key, image: $image, predictions: $predictions}';
  }
}

/// generated route for
/// [_i16.ProfileScreen]
class ProfileScreenRoute extends _i22.PageRouteInfo<void> {
  const ProfileScreenRoute()
      : super(
          ProfileScreenRoute.name,
          path: '/profile-screen',
        );

  static const String name = 'ProfileScreenRoute';
}

/// generated route for
/// [_i17.PasswordScreen]
class PasswordScreenRoute extends _i22.PageRouteInfo<void> {
  const PasswordScreenRoute()
      : super(
          PasswordScreenRoute.name,
          path: '/password-screen',
        );

  static const String name = 'PasswordScreenRoute';
}

/// generated route for
/// [_i18.AboutAppScreen]
class AboutAppScreenRoute extends _i22.PageRouteInfo<void> {
  const AboutAppScreenRoute()
      : super(
          AboutAppScreenRoute.name,
          path: '/about-app-screen',
        );

  static const String name = 'AboutAppScreenRoute';
}

/// generated route for
/// [_i19.FeedbackScreen]
class FeedbackScreenRoute extends _i22.PageRouteInfo<void> {
  const FeedbackScreenRoute()
      : super(
          FeedbackScreenRoute.name,
          path: '/feedback-screen',
        );

  static const String name = 'FeedbackScreenRoute';
}

/// generated route for
/// [_i20.PrivacyPolicyScreen]
class PrivacyPolicyScreenRoute extends _i22.PageRouteInfo<void> {
  const PrivacyPolicyScreenRoute()
      : super(
          PrivacyPolicyScreenRoute.name,
          path: '/privacy-policy-screen',
        );

  static const String name = 'PrivacyPolicyScreenRoute';
}

/// generated route for
/// [_i21.TermsOfUse]
class TermsOfUseRoute extends _i22.PageRouteInfo<void> {
  const TermsOfUseRoute()
      : super(
          TermsOfUseRoute.name,
          path: '/terms-of-use',
        );

  static const String name = 'TermsOfUseRoute';
}
