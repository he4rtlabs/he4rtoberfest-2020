import java.util.Scanner;

public class Fibonacci {
	public static void main(String[] args){
		Scanner scan = new Scanner(System.in);
		int input;
		int actual = 0, previous1 = 0, previous2 = 1;

		System.out.print("Digite um número para sequência de Fibonacci: ");
		input = scan.nextInt();

		for(int i = 0; i < input; i++){
			System.out.print(actual + " ");
			int aux = actual;
			actual = previous1 + previous2;
			previous1 = aux;
			previous2 = actual;
		}
	}
}
