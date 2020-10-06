import 'dart:io';

void main() {
  print("\n");

  var numero = getInputValue("Informe o número: ");

  List<dynamic> finalList = fibonacci_series(int.parse(numero));

  validateNumber(numero);

  finalList.removeAt(finalList.length - 1);

  print("\n");

  print(finalList.join(' '));
}

List fibonacci_series(n) {
  if (n == 1) {
    return [0, 1];
  } else {
    List s = fibonacci_series(n - 1);
    s.add(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
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
  } else {
    if (int.parse(number) < 0 || int.parse(number) > 46) {
      print('\nATENÇÃO: Informe um número de 1 até 46!');
      exit(1);
    }
  }
}
