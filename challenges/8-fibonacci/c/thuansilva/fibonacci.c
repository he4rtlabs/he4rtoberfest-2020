#include <stdio.h>

// Função da sequencia Fibonacci
void fibonacci(int posicao_buscada){
    int i, vetor[posicao_buscada];
    for(i = 0; i<posicao_buscada; i++){
        if(i==0) vetor[0] = 0;
        else if (i==1) vetor[1] = 1;
        else vetor[i] = vetor[i-1] + vetor[i-2];               
        printf("%d",vetor[i]); 
        if(i != posicao_buscada -1) printf(" ");     
     }
     printf("\n");
}

// Função Principal

int main()
 {
    int posicao_buscada;

    scanf("%d",&posicao_buscada); 

    if( posicao_buscada<=0 ||posicao_buscada>= 46){
    printf("Tente valor entre o intervalo de 0< N <46\n");
    return 0;
    }
    // Chamada da Função
    fibonacci(posicao_buscada); 
    return 0;
 }
 