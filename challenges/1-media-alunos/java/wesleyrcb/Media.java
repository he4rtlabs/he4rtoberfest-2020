import java.util.Scanner;

public class Media {
	public static void main(String[] args){

		Scanner scan = new Scanner(System.in);

		float note1, note2, avg;

		note1 = scan.nextFloat();
		note2 = scan.nextFloat();

		avg = (note1 + note2) / 2;

		System.out.printf("Média -> %.1f", avg);
	}
}