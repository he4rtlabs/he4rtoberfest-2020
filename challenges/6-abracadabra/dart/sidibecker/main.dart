import 'dart:io';

final String ESPACO = ' ';
final String STRING_VAZIA = '';
final String QUEBRA_LINHA = '\n';

void main() {
  print(QUEBRA_LINHA);

  var palavraBase = getInputValue("Informe a palavra Base: ");
  
  print(QUEBRA_LINHA);

  var tamanhoRepeticao = palavraBase.length;

  for (int i = 0; i < tamanhoRepeticao; i++) {
    var array = stringtoArray(palavraBase);
    var palavraEspacada = array.join(ESPACO);

    print((ESPACO * i) + palavraEspacada);

    palavraBase = removeLastIndex(palavraBase);
  }
}

String getInputValue(String title) {
  stdout.write(title);
  return stdin.readLineSync();
}

/**
 * Transforma a string em array de letras.
 */
List stringtoArray(String text) {
  return text.split(STRING_VAZIA).map((e) => e.toUpperCase()).toList();
}

String removeLastIndex(String source) {
  return source.replaceRange(source.length - 1, source.length, STRING_VAZIA);
}
