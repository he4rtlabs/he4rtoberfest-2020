public class MediaAlunos {

  /**
   * Função para calcular a média aritmética entre dois valores
   * 
   * @param A
   * @param B
   * @return
   */
  public static double calcularMedia(double A, double B) {
    return (double) ((A + B) / 2);
  }

  public static void main(String[] args) {
    try {
      if (args != null && args.length >= 2) {
        double media = calcularMedia(Double.parseDouble(args[0]), Double.parseDouble(args[1]));
        System.out.printf("Média -> %.2f \n", media);
      }
    } catch (NumberFormatException e) {
      System.out.println("ERRO => Você deve inserir dois números no seguinte formato: xx.xx ou x");
    }
  }
}