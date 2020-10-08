#include <iostream>
#include <stdio.h>

using namespace std;

void areaTrapezio(int baseMaior, int baseMenor, int altura) {
    float area = ((baseMaior+baseMenor)*altura)/2;
    if (baseMaior <= 0 || baseMenor <= 0 || altura <= 0) {
        cout << "O(s) valor(es) informado(s) precisa(m) ser positivo(s)!" << endl;
    } else printf("A area do trapezio e: %.1f", area);
}

int main() {
    int baseMaior, baseMenor, altura;
    cout << "Base maior: "; cin >> baseMaior;
    cout << "Base menor: "; cin >> baseMenor;
    cout << "Base altura: "; cin >> altura;
    areaTrapezio(baseMaior, baseMenor, altura);
    return 0;
}