import java.util.Scanner;

public class Trapezio {

		public static double trapezio(double baseMaior,double baseMenor,double altura) {
			
			return (baseMaior + baseMenor) * (altura / 2);
			
		}
		public static void main(String[] args) {
			Scanner sc = new Scanner(System.in);
			double baseMaior = 0,baseMenor=0,altura=0;
			
			System.out.println("Base Maior: ");
			if(sc.hasNextDouble()) {	
				
				baseMaior = sc.nextDouble();
				
				System.out.println("Base menor");
				baseMenor = sc.nextDouble();
				
				System.out.println("Altura");
				altura = sc.nextDouble();
			}else {
				System.out.println("Valor invalido!. A aplicacoo so aceitara numeros. Tente novamente!! ");
			}		
			
			
			sc.close();
			
			System.out.println(trapezio(baseMaior,baseMenor,altura));
		}
}