#include "stdio.h"
#include "stdlib.h"

char *caesarCipher(char *message, int shift){
    int i;

    for(i=0;message[i]!='\0';i++){
        message[i] = message[i] - shift;
        if(message[i] < 65) {
            message[i] = 91 - (65 - message[i]);
        }
    }

    return message;
}

int main(){
    int i, testCases, shift;
    char *initialMessage, *resultMessage;

    initialMessage = malloc(50*sizeof(char));
    resultMessage = malloc(50*sizeof(char));

    scanf("%d", &testCases);
    for(i=1 ; i<=testCases ; i++){
        scanf("%s", initialMessage);
        scanf("%d", &shift);
        resultMessage = caesarCipher(initialMessage, shift);
        printf("%s\n", resultMessage);
    }
}