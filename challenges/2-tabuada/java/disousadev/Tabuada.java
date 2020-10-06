import java.util.Scanner;

public class Tabuada {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        for (int i = 1; i <= n; i++) {
            System.out.println("=================================");
            System.out.println("A tabuada do numero " + i + " é:");
            for (int j = 1; j <= 10; j++) {
                System.out.println(i + "*" + j + " = " + i * j);
            }
        }
        scan.close();
    }
}