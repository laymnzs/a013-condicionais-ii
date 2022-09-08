//Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3

let num = prompt("Digite um número")

    if(num%2 === 0){
        if(num%3 === 0){
               console.log("Este número é divisível por 2 e 3")
}
    else {
        console.log("Este número é divisível por 2")
    } 
}
    else {
        if(num % 3 === 0){
        console.log("Este número é divisível por 3")
        }
        else{
            console.log("Este número não é divisível por 2 e 3")
        }
        }

//2. Utilizando um operador lógico para unir duas operações relacionais

if(num%2 === 0 || num%3 === 0){
    console.log("Este número é divisível por 2 e 3")
}
else {
    console.log("Este número não é divisível por nenhum dos dois")
}
