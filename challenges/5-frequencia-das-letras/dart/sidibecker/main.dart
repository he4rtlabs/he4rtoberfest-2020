import 'dart:io';

void main() {
  var quantidadeCasos =
      getInputValue("Informe a quantidade de casos de teste: ");

  validateNumber(quantidadeCasos);

  var commonsLetters = [];

  for (var i = 1; i <= int.parse(quantidadeCasos); i++) {
    var frase = getInputValue("Informe a frase $i: ");

    commonsLetters.add(getCommonsLetters(frase));
  }

  for (var item in commonsLetters) {
    print(item.join(''));
  }
}

List getCommonsLetters(String text) {
  List<Map> commonsLetters = <Map>[];

  var max = 0;

  var letters = text.split('').map((letter) => letter);

  for (var letter in letters) {

    letter = letter.toLowerCase();

    var currentMax = text.toLowerCase().split(letter).length -1;

    if (letter != ' ' && currentMax >= max && !arrayHasLetter(commonsLetters, letter)) {
      max = currentMax;
      commonsLetters.add({'letter': letter, 'times': currentMax});
    }
  }

  var maxLetters = commonsLetters.where((obj) => obj['times'] == max);

  return (maxLetters.map((e) => e['letter']).toList());
}

bool arrayHasLetter(commonsLetters, letter) {
  return commonsLetters.where((obj) => obj['letter'] == letter).length > 0;
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
