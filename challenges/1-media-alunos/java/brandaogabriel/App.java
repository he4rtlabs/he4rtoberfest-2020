import java.util.Scanner;

public class App {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		double nota1 = sc.nextDouble();
		double nota2 = sc.nextDouble();
		double media = (nota1 + nota2) / 2;
		
		System.out.println("Media -> " + media);
		
		sc.close();
	}

}
