import java.util.Scanner;

public class App {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int valor = sc.nextInt();
		
		System.out.println("===========================");
		
		for(int i = 1; i <= valor; i++) {
			System.out.println("A tabuada do numero " + i + " é: ");	
			for(int j = 1; j < 11; j++) {
				System.out.println(i + " * " + j + " = " + i*j);			
			}
			System.out.println("===========================");
		}
		
		sc.close();
	}

}

