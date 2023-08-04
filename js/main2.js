const ingressoAtual = JSON.parse(localStorage.getItem("dadosIngresso"));

const nasc = ingressoAtual.data;
const dia = nasc[8] + nasc[9];
const mes = nasc[5] + nasc[6];
const ano = nasc[0] + nasc[1] + nasc[2] + nasc[3];

const dados__nome = document.getElementById("dados__nome");
const dados__data = document.getElementById("dados__data");
const dados__email = document.getElementById("dados__email");
const dados__tipo = document.getElementById("dados__tipo");

dados__nome.innerHTML = ingressoAtual.nome;
dados__data.innerHTML = dia + " / " + mes + " / " + ano;
dados__email.innerHTML = ingressoAtual.email;
dados__tipo.innerHTML = "Setor Pista - " + ingressoAtual.tipo;



// 
// 
// const dados__email = document.getElementById("dados__email");
// const dados__tipo = document.getElementById("dados__tipo");

// dados__nome.innerText = ingressoAtual.nome;
// 
// dados__email.innerHTML = email;
// dados__tipo.innerHTML = "Setor Pista - " + tipo;


