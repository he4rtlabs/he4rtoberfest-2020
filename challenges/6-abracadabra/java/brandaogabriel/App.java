
import java.util.Scanner;

public class App {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Digite a palavra que deseja fazer a pirâmide: ");
		String palavra = sc.nextLine();
		
		validaPalavra(palavra);
	
		int tamanhoPalavra = palavra.length();
		int aux = 0;
		while(tamanhoPalavra > 0) {
			
			for(int i = 1; i < aux; i++) {
				System.out.print(" ");
			}
			
			String palavraAtual = palavra.substring(0, tamanhoPalavra).replace("", " "); 
			
			//Removendo o espaço do primeiro caractere da primeira aparição
			if(aux == 0) {
				palavraAtual = palavraAtual.substring(1);
			}
			
			palavraAtual += "\n";
			System.out.println(palavraAtual);
			tamanhoPalavra--;
			aux++;
		}

		sc.close();
	}

	private static void validaPalavra(String palavra) {
		if(palavra.length() < 2 || palavra.length() > 100 || palavra.contains(" "))
			throw new IllegalArgumentException("Você deve inserir uma palavra de mínimo tamanho 2, máximo tamanho 100 e sem espaços.");
		
	}

}
