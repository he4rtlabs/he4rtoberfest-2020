import java.util.InputMismatchException;
import java.util.Scanner;

public class Trapezio {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        try {

            double baseMaior = scan.nextDouble();
            double baseMenor = scan.nextDouble();
            double altura = scan.nextDouble();

            double area = (baseMaior + baseMenor) * altura / 2;

            System.out.println("A área do trapézio é: " + area);

        } catch (InputMismatchException e) {
            System.out.println("Digite apenas números.");
        } finally {
            scan.close();
        }
    }
}