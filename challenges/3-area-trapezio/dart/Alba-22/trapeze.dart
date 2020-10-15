import 'dart:io';

void main() {
  try {
    stdout.write("Base Maior: ");
    double largerBase = double.parse(stdin.readLineSync());
    stdout.write("Base Menor: ");
    double smallerBase = double.parse(stdin.readLineSync());
    stdout.write("Altura: ");
    double height = double.parse(stdin.readLineSync());
    double area = (largerBase + smallerBase) * height / 2;
    stdout.write("A área do trapézio é: $area");
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