public class Challenge {
    public static double calculaAreaTrapezio(int baseMaior, int baseMenor, int altura) {
        return (baseMaior + baseMenor) * altura / 2.0;
    }

    public static void main(String[] args) {
        if (args == null || args.length < 3)
            return;

        int baseMaior = Integer.parseInt(args[0]);
        int baseMenor = Integer.parseInt(args[1]);
        int altura = Integer.parseInt(args[2]);

        System.out.println("A área do trapézio é: " + calculaAreaTrapezio(baseMaior, baseMenor, altura));
    }
}
