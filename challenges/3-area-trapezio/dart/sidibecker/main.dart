import 'dart:io';

void main() {
  print("\n");

  try {
    var baseMaior = getInputValue("Informe a Base Maior: ");
    var baseMenor = getInputValue("Informe a Base Menor: ");
    var altura = getInputValue("Informe a Altura: ");

    var area = (baseMaior + baseMenor) * altura / 2;
    print("\nA área do trapézio é: $area");

  } catch (e) {
    print("\nHouve um erro ao capturar o valor informado. Verifique se é um número e tente novamente.");
    return;
  }
}

double getInputValue(String title) {
  stdout.write(title);
  return double.parse(stdin.readLineSync());
}
