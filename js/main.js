const botao = document.getElementById("ingresso__botao");

botao.addEventListener("click", () => {
    const nome = document.getElementById("ingresso__nome").value;
    const email = document.getElementById("ingresso__email").value;
    const tipo = document.getElementById("ingresso__tipo").value;
    const data = document.getElementById("ingresso__data").value;
    
    const dadosIngresso = {
        "nome": nome,
        "email": email,
        "tipo": tipo,
        "data": data
    }
    
    localStorage.setItem("dadosIngresso", JSON.stringify(dadosIngresso));
    
})



