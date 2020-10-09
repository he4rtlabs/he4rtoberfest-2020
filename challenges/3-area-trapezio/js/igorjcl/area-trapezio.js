const params = process.argv.slice(2);

function temString(params) {
    let temString = false;

    params.forEach((param) => {

        if (!Number(param)) {
            temString = true;
        }
    })
    return temString;
}

const temTresParametros = (params) => params.length === 3;

const converterParametros = (params) => params.map(param => Number(param));

function parametrosSaoValidos(params) {
    
    if (!temTresParametros(params)) {
        console.error("Você precisa informar 3 parâmetro");
        return false;
    }

    if (temString(params)) {
        console.error("Informe apenas números");
        return false;
    }

    return true;
}

function calcularAreaDoTrapezio(params) {
    let area = 0;
    if (parametrosSaoValidos(params)) {
        const [baseMaior, baseMenor, altura] = converterParametros(params);
        area = ((baseMaior + baseMenor) * altura) / 2;
        return area;
    }
    return area;
}

const area = calcularAreaDoTrapezio(params);
console.log(`A área do trapézio é: ${area}`);