import 'dart:io';

void main() {
  try {
    String input = stdin.readLineSync().trim();
    List<String> grades = input.split(RegExp(r"(\s+)"));
    double average, sum = 0;
    for (String grade in grades) {
      sum += double.parse(grade);
    }
    average = sum / grades.length;
    stdout.write("Média -> $average");
  }
  catch (error) {
    if (error.runtimeType == FormatException) {
      print("Input inválido");
    }
    else {
      print("Ocorreu um erro");
    }
  }
}