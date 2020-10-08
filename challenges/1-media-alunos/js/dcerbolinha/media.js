function mediaAlunos(a, b){
    if(!a && !b){
        return "As duas notas são obrigatórias"
    }
    if(isNaN(a)){
        return "A primeira nota deve ser um numero"
    }
    if(isNaN(b)){
        return "A segunda nota deve ser um numero"
    }
    return (a+b) / 2;
}

console.log(mediaAlunos(22,53))