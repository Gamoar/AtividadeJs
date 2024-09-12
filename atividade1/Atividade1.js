alert(`Vamos calcular a sua média!`);
let nota1 = parseFloat(prompt('Digite a Primeira nota: '));
let nota2 = parseFloat(prompt('Digite a Segunda nota: '));
let nota3 = parseFloat(prompt('Digite a Terceira nota: '));
let nota4 = parseFloat(prompt('Digite a Quarta nota: '));

let media = (nota1+nota2+nota3+nota4)/4;

if(media>=7){
    alert(`Você está aprovado com a média de ${media}!`);
}else{
    alert(`Você está reprovado com a média ${media}!`);
}