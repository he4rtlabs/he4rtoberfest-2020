import 'dart:io';

void main() {
  try {
    int n = int.parse(stdin.readLineSync());
    print("===========================");
    for (int i = 1; i <= n; i++) {
      print("A tabuada do número $i é:");
      for (int j = 1; j <= 10; j++) {
        print("$i x $j = ${i * j}");
      }
      print("===========================");
    }
  }
  catch (e) {
    if (e.runtimeType == FormatException) {
      print("Input Inválido");
    }
    else {
      print("Ocorreu um erro");
    }
  }
}