#include<stdio.h>

int main(void){
	char hl[]= {'H','e','4','r','t','o','b','e','r','f','e','s','t','!'};
	char *hll;
	//O ponteiro hll recebe o endreço do elemento hl[0] do vetor hl[]
	hll = hl;

	printf("Hello, ");
	
	//Sai do loop quando o o valor contido ponteiro hll for '!'
	while( *(hll) != '!' ){
		printf("%c", *hll);

		hll++; //equivalente a hl[1], hl[2], ...
	}

	printf("%c%c\n", *hll, *hll); //o ponteiro hll está no endereço onde o valor é '!'

	printf("\n\nPress ENTER for exit\n");
	getchar();
	return 0;
}