import 'dart:io';

void main() {
  String input = stdin.readLineSync().trim();
  int firstGrade = int.parse(input.split(" ")[0].trim());
  int secondGrade = int.parse(input.split(" ")[1].trim());
  double average = (firstGrade + secondGrade) / 2;
  stdout.write("Média -> $average");
}