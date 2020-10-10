#include<stdio.h>

float media(float, float);

int main(void){
	float	nota1 = 0,
			nota2 = 0;

	printf("Insira suas duas notas avaliativas(ex: 5.5 10): ");
	scanf("%f %f", &nota1, &nota2);


	printf("Sua media: %.2f\n", media(nota1, nota2));


	return 0;
}

float media(float nota1, float nota2){
	return ( (nota1+nota2)/2 );
}
