
calc <- function(nota1, nota2){
  print("Bem vindo a calculadora de medias com R")
  nota1 <- readline(prompt = "Qual a sua primeira nota? ")
  nota2 <- readline(prompt = "Qual a sua segunda nota? ")
  
  print("Processando.")
  print("Processando..")
  print("Processando...")
  print("Processando..")
  print("Processando.")
  
  nota1 <- as.integer(nota1)
  nota2 <- as.integer(nota2)
  
  resp <- (nota1+nota2)/2
  
  print("A sua média é:")
  print(resp)
}

calc()