#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *caesarCipher(char *message, int shift){
    char *result = malloc(50);
    int i, initialValue;

    for(i=0;message[i]!='\0';i++){
        initialValue = message[i];
        message[i] = message[i] - shift;
        if(message[i] < 65) {
            message[i] = 91 - (65 - message[i]);
        }else if(initialValue >= 97 && message[i] < 97){
            message[i] = 123 - (97 - message[i]);
        }
    }

    strcpy(result, message);
    return result;
}

int main(){
    int i, testCases, shift;
    char *initialMessage, *resultMessage, **results;
    initialMessage = malloc(50);
    resultMessage = malloc(50);

    printf("Informe a quantidade de casos de teste: ");
    scanf("%d", &testCases);

    results = malloc(testCases);
    for(i=0;i<testCases;i++){
        results[i] = malloc(50);
        if (results[i]==NULL){
            printf("Você não tem memória o suficiente no sistema. Essa aplicação será encerrada\n");
            exit(1);
	    }
    }

    for(i=0 ; i<testCases ; i++){
        printf("Informe o texto: ");
        scanf("%s", initialMessage);
        printf("Informe a quantidade de letras a serem deslocadas: ");
        scanf("%d", &shift);
        results[i] = caesarCipher(initialMessage, shift);
    }

    for(i=0;i<testCases;i++){
        printf("Decifrado: %s\n", &results[i][0]);
    }
    free(results);
}