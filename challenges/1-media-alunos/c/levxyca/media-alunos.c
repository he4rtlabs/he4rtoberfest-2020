#include <stdio.h>

int main() {
    float nota1, nota2, media;

    printf("\n:::::: Calculadora de média aritmética para alunos ::::::\n");
    
    printf("Digite a sua 1ª nota: ");
    scanf("%f", &nota1);

    printf("Digite a sua 2ª nota: ");
    scanf("%f", &nota2);

    media = (nota1 + nota2) / 2;

    printf("Sua média final é: %.1f", media);

    printf("\n:::::::::::::::::::::::::::::::::::::::::::::::::::::::::\n");

    return 0;
}