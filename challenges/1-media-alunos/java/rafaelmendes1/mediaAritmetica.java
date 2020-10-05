import java.util.Scanner;

public class MediaAritmetica {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		double num, num2;
		
		num = sc.nextDouble();
		num2 = sc.nextDouble();
		
		System.out.println((num+num2)/2);
		
		sc.close();

	}

}
