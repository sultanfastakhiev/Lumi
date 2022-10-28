// ignore_for_file: use_build_context_synchronously

import 'dart:io';

import 'package:file_picker/file_picker.dart';
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

Future<FilePickerResult?> pickFiles(
  BuildContext context, {
  bool multiple = false,
  List<String>? allowedExtensions,
}) async {
  try {
    // check permission
    var permission = await Permission.storage.status;

    // ask permission again if no permission was granted
    if (permission == PermissionStatus.denied) {
      permission = await Permission.storage.request();
    }

    // showing error message if permission not granted
    if (permission == PermissionStatus.denied || permission == PermissionStatus.permanentlyDenied) {
      final message = permission == PermissionStatus.permanentlyDenied
          ? "Вы должны разрешать приложению доступ к файлам в настройках вашего устройства"
          : "Вы должны разрешать приложению доступ к файлам для загрузки";

      final snackBar = SnackBar(content: Text(message));
      ScaffoldMessenger.of(context).showSnackBar(snackBar);
      return null;
    }

    // picking image
    return await FilePicker.platform.pickFiles(allowMultiple: multiple, allowedExtensions: allowedExtensions);
  } catch (e, stackTrace) {
    logger.error("Failed to pick file", e, stackTrace);
    return null;
  }
}

bool validateFileType({
  required BuildContext context,
  required String filePath,
  required List<String> types,
  required String errorTypes,
}) {
  final type = lookupMimeType(filePath);
  if (!types.contains(type)) {
    final message = "Недопустимое расширение файла. Разрешены только файлы $errorTypes";
    final snackBar = SnackBar(content: Text(message));
    ScaffoldMessenger.of(context).showSnackBar(snackBar);
    return false;
  }
  return true;
}

Future<File?> pickPredictionImage(BuildContext context) async {
  final image = await pickImage(context, source: ImageSource.gallery);
  if (image == null) return null;

  final correctType = validateFileType(
    context: context,
    errorTypes: "JPEG или JPG",
    filePath: image.path,
    types: ["image/jpeg", "image/jpg"],
  );

  if (correctType) return File(image.path);
  return null;
}

Future<File?> pickPredictionCsv(BuildContext context) async {
  final result = await pickFiles(context);
  if (result == null || result.count == 0) return null;

  final correctType = validateFileType(
    context: context,
    errorTypes: "CSV",
    filePath: result.files.first.path!,
    types: ["text/csv"],
  );

  if (correctType) return File(result.files.first.path!);
  return null;
}

String getFileName(File file) {
  return file.path.split("/").last;
}

String getFileSize(File file) {
  var size = file.lengthSync().toDouble();
  const units = ["B", "KB", "MB", "GB", "TB"];
  var i = 0;
  while (size > 1024) {
    size /= 1024;
    i++;
  }
  return "${ size.floor() } ${ units[i] }";
}