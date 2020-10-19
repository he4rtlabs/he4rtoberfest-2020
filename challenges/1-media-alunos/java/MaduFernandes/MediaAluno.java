import java.util.Scanner;

public class MediaAluno {

    public static void main(String[] args) {
        mediaAluno();
    }

    public static void mediaAluno() {
        Scanner input = new Scanner(System.in);

        System.out.println("Quantas notas vai ser adicionadas ?");
        Integer qntdNota = input.nextInt();

        for(int i = 0; i < qntdNota; i++) {
            System.out.println("Informe a primeira nota do aluno:");
            Integer nota1 = input.nextInt();

            System.out.println("Informe a segunda nota do aluno:");
            Integer nota2 = input.nextInt();

            double media = (nota1 + nota2) / 2;

            System.out.println("A média é: " + media);
        }
    }
}