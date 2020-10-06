import java.util.Scanner;

public class TrapezioCalcArea {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
	
		double baseMaior, baseMenor, altura;
		baseMaior = sc.nextDouble();
		baseMenor = sc.nextDouble();
		altura = sc.nextDouble();
	
		System.out.println("A área do trapézio é: "+ (baseMaior + baseMenor)*altura/2);
	
		sc.close();
	}
}
