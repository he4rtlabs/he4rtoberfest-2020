import java.util.Scanner;

public class MediaAluno {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		System.out.print("Informe sua primeira nota: ");
		double notaA = input.nextDouble(); 
		
		System.out.print("Agora, informe sua segunda nota: ");
		double notaB = input.nextDouble();
		
		// Calcula a média aritmética
		double media = (notaA + notaB) / 2;
		
		System.out.printf("Sua média é: %.2f", media);
		input.close();
	}
}
