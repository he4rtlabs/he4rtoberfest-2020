#include "stdlib.h"
#include "stdio.h"

int main(){
    float firstGrade, secondGrade;
    scanf("%f %f", &firstGrade, &secondGrade);

    float mean = (firstGrade + secondGrade)/2;
    printf("Media -> %.1f\n", mean);
}