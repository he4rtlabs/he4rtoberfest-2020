# Submissão de Exercicio

**Exercicio:** 0 - Hello World

**Nickname:** albjoaov

**Nível Técnico:** Júnior

**Twitter**: https://twitter.com/albuquerquejv

**Dificuldade de Resolução:** Baixa

## Como rodar o desafio: 

Para começar, acesse a pasta onde está o seu arquivo através do comando change directory: `cd`

```bash
$ cd he4rtoberfest-2020/challenges/0-hello-world/java/albjoaov/hello/
```

### Para executar o código:

#### Antes do JAVA 11:

- Compile o código

```bash
$ javac HelloWorld.java
```

- Retorne para o diretório raiz (a pasta que contém os pacotes). Nesse caso é a pasta `albjoaov`, 
ela que contém a pasta `hello` que representa o pacote de mesmo nome.

    - Nesse caso, uso o comando abaixo voltando um nível apenas

```bash
$ cd ..
```

- Execute o código passando o nome do pacote e o nome da classe concatenado com o `.` 
```bash
$ java hello.HelloWorld
```

#### A partir do JAVA 11, use o comando abaixo:

```bash
$ java HelloWorld.java
```

Para saber mais sobre essa nova funcionalidade, segue o link: https://stackoverflow.com/questions/54493058/running-a-java-program-without-compiling/54493093