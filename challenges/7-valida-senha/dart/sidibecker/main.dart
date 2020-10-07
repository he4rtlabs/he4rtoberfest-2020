import 'dart:io';
import 'package:diacritic/diacritic.dart';

void main(List<String> args) {
  print("\n");

  if (args.length < 1) {
    print('Esse programa necessita de um argumento.');
    exit(1);
  }

  var valid = true;

  var stringSenha = args.join(' ');

  var tests = [
    hasValidSize,
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    validateSpace,
    validateAccent
  ];

  for (var test in tests) {
    valid = valid && test(stringSenha);
  }

  print('Senha ' + (valid ? 'válida' : 'inválida') + '.');
}

bool hasValidSize(String str) {
  return str.length >= 6 && str.length <= 32;
}

bool hasLowerCase(str) {
  return str.toUpperCase() != str;
}

bool hasUpperCase(str) {
  return str.toLowerCase() != str;
}

bool hasNumber(String str) {
  RegExp regExp = RegExp(r'[0-9]');

  return regExp.hasMatch(str);
}

bool validateSpace(String str) {
  RegExp regExp = RegExp(r'\ ');

  return !regExp.hasMatch(str);
}

bool validateAccent(String source) {
  var test = removeDiacritics(source);

  RegExp regExp = new RegExp(r'[^\w]+');

  test = test.replaceAll(regExp, "");

  return source == test;
}
