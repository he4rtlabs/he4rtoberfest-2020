import java.util.Scanner;

public class Tabuada {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		System.out.print("Digite um número: ");
		int x = input.nextInt();
		
		for (int i = 1; i <= x; i++) {
			System.out.println("===========================");
			System.out.println("A tabuada do número " + i + " é:");
			for (int j = 1; j <= 10; j ++) {
				System.out.print(i + "*" + j + " = " );
				System.out.print(i* j + "\n");
			}
		}
		
		input.close();
	}
}
