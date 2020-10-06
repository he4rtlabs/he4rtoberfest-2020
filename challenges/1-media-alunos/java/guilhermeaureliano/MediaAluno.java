import java.util.Scanner;

public class MediaAluno {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		System.out.print("Informe a quantidade de notas que você quer: ");
		int x = input.nextInt();
		double somaNotas = 0;
		int contNotas = 0;
		try {
			for(int i = 0; i < x; i++) {
				System.out.print("Digite sua " + (i+1) + "°" + " nota: ");
				double nota = input.nextDouble();
				somaNotas += nota;
				contNotas ++; // Quantidade de notas válidas
			}	
		} catch (Exception ex) {
			System.out.println("Programa encerrado pois o valor digitado não é um número! \n");
		}
		
		double mediaNotas = somaNotas/contNotas;
		System.out.println("Sua média é: " + mediaNotas);
		
		input.close();
	}
	
}
