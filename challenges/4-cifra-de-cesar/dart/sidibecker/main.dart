import 'dart:io';
import 'alfabeto.dart';

void main() {
  print("\n");

  final List textosDecodificados = [];

  var quantidadeCasos =
      getInputValue("Informe a quantidade de casos de teste: ");

  validateNumber(quantidadeCasos);

  for (var i = 1; i <= int.parse(quantidadeCasos); i++) {
    var textoCodificado = getInputValue("\nInforme a mensagem do caso $i: ");

    var posicoes = getInputValue("Informe o número de posições do caso $i: ");

    validateNumber(posicoes);

    final textoDecodificado = decodificarTexto(textoCodificado, posicoes);

    textosDecodificados.add(textoDecodificado);
  }

  print("\n\nResultados:");

  for (final texto in textosDecodificados) {
    print(texto);
  }
}

String decodificarTexto(String textoCodificado, String posicoes) {
  final arrayLetrasCodificadas = stringtoArray(textoCodificado);

  final letrasDecodificadas = [];

  for (var letra in arrayLetrasCodificadas) {
    final int indexNoAlfabeto = ALFABETO.indexOf(letra.toUpperCase());

    int novoIndex = indexNoAlfabeto - (int.parse(posicoes));

    if (novoIndex < 0) {
      novoIndex = 26 + novoIndex;
    }

    final novaLetra = ALFABETO[novoIndex];

    letrasDecodificadas.add(novaLetra);
  }

  return arrayToString(letrasDecodificadas);
}

/**
 * Transforma a string em array de letras.
 */
List stringtoArray(String text) {
  return text.split('').map((e) => e.toUpperCase()).toList();
}

/**
 * Transforma o array em uma string.
 */
String arrayToString(List array) {
  return array.join('');
}

String getInputValue(String title) {
  stdout.write(title);
  return stdin.readLineSync();
}

bool isNumeric(String s) {
  if (s == null) {
    return false;
  }
  return double.parse(s, (e) => null) != null;
}

void validateNumber(String number) {
  if (!isNumeric(number)) {
    print('\nATENÇÃO: Informe um número inteiro!');
    exit(1);
  }
}
