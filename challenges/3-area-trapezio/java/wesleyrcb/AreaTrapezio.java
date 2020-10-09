import java.util.Scanner;

public class AreaTrapezio{
	public static void main(String[] args){
		Scanner scan = new Scanner(System.in);
		double baseMaior, baseMenor, altura, area;

		System.out.print("baseMaior: ");
		baseMaior = scan.nextDouble();
		System.out.print("baseMenor: ");
		baseMenor = scan.nextDouble();
		System.out.print("altura: ");
		altura = scan.nextDouble();

		area = (baseMaior + baseMenor) * altura / 2;

		System.out.printf("A área do trapézio é: %.1f", area);

	}
}