#include <iostream>
#include <stdio.h>

using namespace std;

void areaTrapezio(int baseMaior, int baseMenor, int altura) {
    float area = ((baseMaior+baseMenor)*altura)/2;
    printf("A area do trapezio e: %.1f", area);
}

int main() {
    int baseMaior, baseMenor, altura;
    cout << "Base menor: "; cin >> baseMenor;
    cout << "Base maior: "; cin >> baseMaior;
    cout << "Altura: "; cin >> altura;
    areaTrapezio(baseMaior, baseMenor, altura);
    return 0;
}