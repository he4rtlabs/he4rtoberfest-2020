import java.util.Scanner;

public class Tabuada{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);

		System.out.print("Insina um número: ");
		int numero = sc.nextInt();

		for(int i = 1; i <= numero; i++){
			System.out.println("===========================");
			System.out.println("A tabuada do numero " + i + " é:");

			for(int j = 1; j <= 10; j++){
				System.out.println("  " + i + "*" + j + " = " + (i*j));
			}
		}
        System.out.println("===========================");
        sc.close();
	}
}