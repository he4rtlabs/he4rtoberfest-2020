# inclui  < stdio.h >
# inclui  < string.h >
# incluir  < stdbool.h >
# incluir  < ctype.h >

void  main ( void )
{

	 caracteres curtos sem sinalEspeciais = 0 , tam, minuscula = 0 , maiuscula = 0 , tamanho;
	char senha [ 1000 ];
	 curto sem sinal i, casos = 10 ;


		enquanto ( scanf ( " % [^ \ n ] " , senha)! = EOF)
		{
	
			tam = strlen (senha);
			tamanho = verdadeiro ;

			if ( 6 > tam || tam> 32 )
				tamanho = falso ;
			
			para (i = 0 ; i <tam; i ++)
			{
				if ( isupper (senha [i])! = 0 )
					maiuscula ++;
				else  if ( islower (senha [i])! = 0 )
					minuscula ++;
				else  if ((senha [i]> = 32 && senha [i] <= ' / ' ) || senha [i]> 58 && senha [i]> 40 )
					caracteresEspeciais ++;
			}

			if (tamanho == true && maiuscula! = 0 && minuscula! = 0 && caracteresEspeciais == 0 )
				printf ( " Senha valida. \ n " );
			outro
				printf ( " Senha invalida. \ n " );

			mácula = 0 ;
			minúscula = 0 ;
			caracteresEspeciais = 0 ;
			memset (senha, 0 , sizeof (senha));

		}
}
