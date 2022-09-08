/*let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}*/

//Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!


//SWITCH CASE

let nacionalidade = String(prompt("Qual é a sua nacionalidade?"))

switch(nacionalidade){
    case 'brasileira':
        console.log("A pessoa é do Brasil")
        break
    case 'argentina':
        console.log("A pessoa é da Argentina")
        break
    case 'uruguai':
        console.log("A pessoa é do Uruguai")
        break
    case 'chile':
        console.log("A pessoa é do Chile")
        break
    case 'colombia':
        console.log("Colombiana")
        break
    default:
        console.log("Nacionalidade não encontrada")
}
