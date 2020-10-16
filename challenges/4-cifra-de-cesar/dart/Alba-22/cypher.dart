import 'dart:io';

void main() {
  try {
    int testCases = int.parse(stdin.readLineSync());
    List<String> result = new List();
    for (int i = 0; i < testCases; i++) {
      String message = stdin.readLineSync();
      if (message.length > 50 || !RegExp(r"^[A-Z]+$").hasMatch(message)) {
        throw FormatException();
      }
      int position = int.parse(stdin.readLineSync());
      if (position < 0 || position > 25) {
        throw FormatException();
      }
      result.add(transformCypher(message, position));
    }
    for (int i = 0; i < result.length; i++) {
      print(result[i]);
    }
  }
  catch (e) {
    if (e.runtimeType == FormatException) {
      print("Input Inválido");
    }
    else {
      print("Ocorreu um erro :(");
    }
  }
}

String transformCypher(String message, int position) {
  List<int> runes = message.codeUnits;
  String stringResult = "";
  for (int rune in runes) {
    if (rune - position < 65) {
      int newRune = 90 - (position - (rune - 64));
      stringResult += String.fromCharCode(newRune);
    }
    else {
      int newRune = rune - position;
      stringResult += String.fromCharCode(newRune);
    }
  }
  return stringResult;
}