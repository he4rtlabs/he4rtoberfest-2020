import java.util.Scanner;

public class Abracadabra {
    public static void main(String[] args) {
        criarPiramide(obterPalavra());
    }

    public static String obterPalavra(){

        Boolean checarPalavra; // flag para verificar se o input esta correto
        String palavra; //input inserido
        Scanner sc; //scanner para pegar o input do usuario

        System.out.println("Ola mero mortal, insira uma palavra que irei transforma-la em um triangulo: \n");
        System.out.print("Inserir palavra: ");
        
        do{
        checarPalavra = false;
        sc = new Scanner(System.in);
        palavra = sc.nextLine();
        
        if(palavra.length() < 2 || palavra.length() > 100 || palavra.contains(" ")){
            checarPalavra = true;
            System.out.println("Mortal, voce deve digitar UMA palavra " + 
            "que contenha pelo menos 2 caracteres e no maximo 100");
        }

        }while(checarPalavra);

        sc.close();

        System.out.println("");

        return palavra;
    }

    public static void criarPiramide(String palavra){

        System.out.println("Eis a sua piramide meu caro mortal: \n");
        int pointer = palavra.length(); // variavel auxiliar para remover a letra
        int count = 0; // variavel auxiliar para contar o espaco de identacao

        for(int i = 0; i < palavra.length(); i++){
            for(int j = 0; j < count; j++){
                System.out.print(" "); //criar identacao de espaco a esquerda
            }
            for(int k = 0; k < pointer; k++){
                System.out.print(palavra.charAt(k) + " "); // remover ultima letra
            }
            pointer--;
            count++;
            System.out.println("\n");
        }
    }
}