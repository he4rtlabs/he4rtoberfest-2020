public class Challenge {
    public static void mostrarTabuada (int base) {
        System.out.println("===========================");
        System.out.println("A tabuada do numero " + base + " é:");
        for (int i = 1; i <= 10; i++)
            System.out.printf("%d*%d = %d\r\n", base, i, base*i);
    }

    public static void main(String[] args) {
        if (args == null || args.length == 0)
            return;

        int maxBase = Integer.parseInt(args[0]);

        for (int cont = 1; cont <= maxBase; cont++){
            mostrarTabuada(cont);
        }
    }
}
