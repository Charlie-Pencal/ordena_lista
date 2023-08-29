// importação da biblioteca
import rl from "readline-sync";

// criação da array que vai conter as propriedades escritas no input
const propriedades = [];

// função com uma variavel let que utiliza question para gerar uma pergunta, onde a resposta vai ser convertida para letras maiusculas com o .toUpperCase e será armazenada.
function pegarPropriedades() {
    let input = rl.question("Digite uma propriedade (ou 'sair' para sair):").toUpperCase()

    // o While como laço de repetição, para que só quando for escrito a palavra sair ele pare de repetir. Enquanto a palavra for diferente de sair, ele continuará repetindo, enquanto isso ele vai adicionar as palavras digitadas e somará a const propriedades.
    while (input !== "SAIR") {
        propriedades.push(input)
        input = rl.question("Digite uma propriedade (ou 'sair' para sair):").toUpperCase()
    }
    // A const propriedades será organizada em ordem alfabetica pelo .sort. Utilizando o forEach, ele mostrará usando o console.log cada elemento do array.
    propriedades.sort().forEach(elemento => {
        console.log(elemento)
    });

}
pegarPropriedades()