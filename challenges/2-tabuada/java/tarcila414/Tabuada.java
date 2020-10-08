public class Tabuada {
  public static void printarTabuada(int valor) {
    for (int i = 1; i <= 10; i++) {
      System.out.println(valor + "*" + i + " = " + i * valor);
    }
  }

  public static void main(String[] args) {
    try {
      if (args != null && args.length >= 1) {
        int valor = Integer.parseInt(args[0]);
        if (valor < 1) {
          throw new NumberFormatException();
        }
        System.out.println("===========================");

        for (int i = 1; i <= valor; i++) {
          System.out.println("A tabuada do número " + i + " é: ");
          printarTabuada(i);
          System.out.println("===========================");
        }
      }
    } catch (NumberFormatException e) {
      System.out.println("ERRO => Você deve inserir um número inteiro maior ou igual a 1");
    }
  }
}