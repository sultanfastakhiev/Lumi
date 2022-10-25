// picks image from gallery/camera
// ignore_for_file: use_build_context_synchronously

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:mime/mime.dart';
import 'package:mobile/utils/loggy.dart';
import 'package:permission_handler/permission_handler.dart';

Future<XFile?> pickImage(BuildContext context, {ImagePicker? picker, ImageSource source = ImageSource.camera}) async {
  try {
    // check permission
    var permission = source == ImageSource.gallery ? await Permission.photos.status : await Permission.camera.status;

    // ask permission again if no permission was granted
    if (permission == PermissionStatus.denied) {
      permission =
          source == ImageSource.gallery ? await Permission.photos.request() : await Permission.camera.request();
    }

    // showing error message if permission not granted
    if (permission == PermissionStatus.denied || permission == PermissionStatus.permanentlyDenied) {
      final message = permission == PermissionStatus.permanentlyDenied
          ? "Вы должны разрешать приложению доступ к галерее в настройках вашего устройства"
          : "Вы должны разрешать приложению доступ к галерее для загрузки изображений с камеры или галереи";

      final snackBar = SnackBar(content: Text(message));
      ScaffoldMessenger.of(context).showSnackBar(snackBar);
      return null;
    }

    // initialize image picker if no passed
    picker ??= ImagePicker();

    // picking image
    return await picker.pickImage(source: source);
  } catch (e, stackTrace) {
    logger.error("Failed to pick image", e, stackTrace);
    return null;
  }
}

bool validateFileType({
  required BuildContext context,
  required XFile file,
  required List<String> types,
  required String errorTypes,
}) {
  final type = lookupMimeType(file.path);
  if (!types.contains(type)) {
    final message = "Недопустимое расширение файла. Разрешены только файлы $errorTypes";
    final snackBar = SnackBar(content: Text(message));
    ScaffoldMessenger.of(context).showSnackBar(snackBar);
    return false;
  }
  return true;
}

Future<XFile?> pickPredictionImage(BuildContext context) async {
  final image = await pickImage(context, source: ImageSource.gallery);
  if (image == null) return null;

  final correctType = validateFileType(
    context: context,
    errorTypes: "JPEG или JPG",
    file: image,
    types: ["image/jpeg", "image/jpg"],
  );

  if (correctType) return image;
  return null;
}
