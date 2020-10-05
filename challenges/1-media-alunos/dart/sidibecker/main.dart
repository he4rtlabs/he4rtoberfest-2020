import 'dart:io';

void main() {

  print("\n");
  
  var nota1 = double.parse(getInputValue("Insira a nota 1: "));
  var nota2 = double.parse(getInputValue("Insira a nota 2: "));

  var media  = (nota1 + nota2) / 2;

  stdout.write("\nMédia -> " + media.toString());
}

String getInputValue(String title) {

  stdout.write(title);
  return stdin.readLineSync();

}
