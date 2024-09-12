alert(`Para usar a calculadora você deve digitar dois números e depois qual operação quer fazer com eles!`);
let num1 = parseInt(prompt(`Digite o Primeiro Número:`));
let num2 = parseInt(prompt(`Digite o Segundo Número:`));
let oper = parseInt(prompt(`Você Quer:\n1)Somar\n2)Subtrair\n3)Multiplicar\n4)Dividir`));

let soma = num1+num2;
let subtrair = num1-num2;
let multiplicar = num1*num2;
let dividir = num1/num2;

switch (oper){
    case oper = 1:
        alert(`${num1}+${num2}=${soma}`);
        break;
    case oper = 2:
        alert(`${num1}-${num2}=${subtrair}`);
        break;
    case oper = 3:
        alert(`${num1}X${num2}=${multiplicar}`);
        break;
    case oper = 4:
        alert(`${num1}/${num2}=${dividir}`);
        break;
    default:
        alert(`Os valores apresentados não são compativeis ,tente novamente!!`);
}
