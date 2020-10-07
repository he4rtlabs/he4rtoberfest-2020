public class Challenge {
    public static double calculaMedia(double nota1, double nota2) {
        return (nota1 + nota2) / 2.0;
    }

    public static void main(String[] args) {
        if (args != null && args.length >= 2) {
            double media = calculaMedia(Integer.parseInt(args[0]), Integer.parseInt(args[1]));
            System.out.println("Media -> " + media);
        }
    }
}
