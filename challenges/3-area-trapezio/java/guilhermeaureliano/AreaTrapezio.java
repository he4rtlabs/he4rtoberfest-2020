import java.util.Scanner;

public class AreaTrapezio {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		System.out.print("Informe a base maior do trapézio: ");
		double baseMaior = input.nextDouble();
		
		System.out.print("Informe a base menor do trapézio: ");
		double baseMenor = input.nextDouble();
		
		System.out.print("E informe a altura do trapézio: ");
		double altura = input.nextDouble();
		
		double area = ((baseMaior + baseMenor) * altura) / 2;
		System.out.println("A área do trapézio é: " + area);
		
		input.close();
	}
}
