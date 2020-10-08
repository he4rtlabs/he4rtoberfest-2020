
public class AreaTrapezio {

  /**
   * Funcao para calcular a area de um trapezio
   * 
   * @param baseMenor
   * @param baseMaior
   * @param altura
   * @return
   */
  public static double calcularArea(double baseMenor, double baseMaior, double altura) {
    return (baseMenor + baseMaior) * altura / 2;
  }

  public static void main(String[] args) {
    try {
      if (args != null && args.length >= 3) {
        double baseMaior = Double.parseDouble(args[0]);
        double baseMenor = Double.parseDouble(args[1]);
        double altura = Double.parseDouble(args[2]);

        double area = calcularArea(baseMenor, baseMaior, altura);

        System.out.printf("A área do trapézio é: %.2f \n", area);
      } else {
        throw new NumberFormatException();
      }

    } catch (NumberFormatException e) {
      System.out.println("ERRO: Você deve inserir 3 valores no formato xx.xx ou x");
    }
  }
}