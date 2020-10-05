import 'dart:io';

void main() {
  print("\n");

  try {
    
    var qtdeNotas = int.parse(getInputValue("Insira a quantidade de notas: "));
    double somaNotas = 0;

    print("\n");

    for (var i = 1; i <= qtdeNotas; i++) {
      var nota = double.parse(getInputValue("Insira a nota $i: "));
      somaNotas += nota;
    }

    var media = somaNotas / qtdeNotas;

    stdout.write("\nMédia -> " + media.toStringAsFixed(2));

  } catch (e) {
    print(
        "\nHouve um erro ao capturar o valor informado. Verifique se é um número e tente novamente.");
    exit(1);
  }
}

String getInputValue(String title) {
  stdout.write(title);
  return stdin.readLineSync();
}
