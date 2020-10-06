#include <stdio.h>

void atualizar_numeros(int *anterior, int *atual);

const int LIMITE = 45;

int main() {
    int quantidade;
    printf("Digite um número: ");
    scanf("%d", &quantidade);
    
    if (quantidade > LIMITE) {
        printf("Número máximo: %i\n", LIMITE);
        return 1;
    }

    int numero_anterior = 1;
    int numero_atual = 1;

    for (int i = 0; i < quantidade; i++) {

        // Ignora os dois primeiros valores
        if (i > 1) {
            printf("%i", numero_atual);
            atualizar_numeros(&numero_anterior, &numero_atual);

            // Evita espaço no último número
            if (i < (quantidade - 1)) {
                printf(" ");
            }
        }

        // Dois primeiros valores
        else {
            printf("%i ", i);
        }
    }
    printf("\n");
}

void atualizar_numeros(int *anterior, int *atual) {
    int tmp = *atual;
    *atual = *anterior + *atual;
    *anterior = tmp;
}