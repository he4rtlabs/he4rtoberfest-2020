import java.util.Scanner;

public class Tabuada {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int numTabuada;
		numTabuada = sc.nextInt();
		System.out.println("=============================");
		System.out.println("A tabuada do número "+ numTabuada +" é");
		
		for(int i=0; i <= 10; i++) {
			int resul = numTabuada * i;
			System.out.println(numTabuada +"*"+i+" = "+ resul);
		}
		
		sc.close();

	}

}
