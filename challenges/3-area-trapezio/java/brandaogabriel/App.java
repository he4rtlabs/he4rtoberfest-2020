
import java.util.InputMismatchException;
import java.util.Scanner;

public class App {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		try {
		
		double baseMaior = sc.nextDouble();
		double baseMenor = sc.nextDouble();
		double altura = sc.nextDouble();
		
		double area = (baseMaior + baseMenor) * altura / 2;
		
		System.out.printf("A área do trapezio é: %.2f \n", area);
		
		}catch(InputMismatchException ime) {
			System.out.println("Você deve inserir um número, letras não são aceitas.");
		}
		sc.close();
	}

}
