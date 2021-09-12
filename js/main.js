/*var nome = "Andrey Batista";
var idade = 29;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo!";
alert(nome + " tem " + idade + "anos");

alert(idade + idade2);
console.log(nome)
console.log(idade + idade2);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));

var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" -> "));

var fruta = { nome: "maça", cor: "vermelha " }
console.log(fruta.cor);

var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas[1].nome);


var idade = prompt("Qual a sua idade")
    //var idade = 18;
if (idade >= 18) {
    alert("<h1>maior de idade</h1>");
} else {
    alert("menor de idade");
};


var count = 0;

while (count <= 5) {
    console.log(count);
    count = count + 1
}


var count;

for (count = 0; count <= 5; count++) {
    console.log(count);

}

var d = new Date();
alert(d);


function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }


}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado</b> por clicar";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://youtube.com");
    //window.location.href = ("https://youtube.com");
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    //alert("Pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}