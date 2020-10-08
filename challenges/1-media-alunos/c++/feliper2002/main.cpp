#include <stdio.h>
#include <iostream>

using namespace std;

void calculaMedia(int nota1, int nota2) {
    float media = (nota1 + nota2)/2;
    printf("%.1f", media);
}

int main() {
    float nota1, nota2;
    cin >> nota1 >> nota2;
    calculaMedia(nota1, nota2);
    return 0;
}