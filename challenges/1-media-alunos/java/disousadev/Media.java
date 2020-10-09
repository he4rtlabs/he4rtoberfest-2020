import java.util.Scanner;

public class Media {

  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);

    try {
      while (scan.hasNext()) {

        double nota1 = scan.nextDouble();
        double nota2 = scan.nextDouble();

        double media = (nota1 + nota2) / 2;

        System.out.println("Média -> " + media);
      }
    } catch (InputMismatchException e) {
      System.out.println("Valor inválido, digite somente números.");
    }

    scan.close();
  }

}
