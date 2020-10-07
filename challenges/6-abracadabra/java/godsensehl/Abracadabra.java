import java.util.Scanner;

public class Abracadabra {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int aux = 0;

        while (sc.hasNext()){

            String palavraBase = sc.nextLine().toUpperCase();

            if(2 <= palavraBase.length() && palavraBase.length() <= 100 && palavraBase.contains(" ")){
                System.out.println("Será permitido apenas palavras de 2 até 100 caracteres e sem espaços!");
                break;
            }

            while(aux <= palavraBase.length()){

                if(aux > 0){

                    for(int i=0; i<aux; i++){
                        System.out.print(" ");
                    }
                    System.out.print(palavraBase.substring(0,(palavraBase.length()-aux)).replace("", " ")+"\n");
                }else{

                    System.out.println((palavraBase.substring(0,(palavraBase.length()-aux)).replace("", " ")));
                }
                aux++;
            }
            aux = 0;
        }
    }
}
