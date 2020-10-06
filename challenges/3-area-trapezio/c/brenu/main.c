#include "stdio.h"
#include "stdlib.h"
#include "ctype.h"

float requestFloatValue(char *message){
    float value;

    printf("%s", message);
    if(scanf("%f", &value)){
        return value;
    }else{
        printf("Por favor, informe somente números!\n");
        exit(0);
    }
}

float trapezoidArea(float firstBase, float secondBase, float height){
    return (firstBase + secondBase) * height / 2;
}

int main(){
    float longerBase, smallerBase, height;

        longerBase = requestFloatValue("Base maior: ");
        smallerBase = requestFloatValue("Base menor: "); 
        height = requestFloatValue("Altura: ");

        printf("A area do trapezio e: %.1f\n", trapezoidArea(longerBase, smallerBase, height));
}
    