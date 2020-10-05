import 'dart:io';

void main() {
  print("\n");

  var number;
  
  try {
    number = int.parse(getInputValue("Informe um número inteiro: "));
  } catch (e) {
    print(
        "\nHouve um erro ao capturar o dado. Verifique-o e tente novamente.\n\n");
        return;
  }

  if (number < 1) {
    print("É necessário informar um valor inteiro positivo.");
    return;
  }

  print("\n");

  printResults(number);
}

String getInputValue(String title) {
  stdout.write(title);
  return stdin.readLineSync();
}

void printResults(int number) {
  for (var i = 1; i <= number; i++) {
    print("A tabuada do número $i é: ");

    for (var n = 1; n <= 10; n++) {
      print("$i*$n = " + (i * n).toString());
    }

    print("===========================");
  }
}
