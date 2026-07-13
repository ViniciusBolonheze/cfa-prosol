// =======================================
// CFA PROSOL
// LEITOR DE PARÂMETROS DA URL
// =======================================

const params = new URLSearchParams(window.location.search);

//========================================

function preencherCampo(id, parametro){

    const elemento = document.getElementById(id);

    if(!elemento) return;

    const valor = params.get(parametro);

    if(valor === null) return;

    elemento.textContent = valor;

}

//========================================

preencherCampo("nome","nome");

preencherCampo("posicao","posicao");

preencherCampo("dataNascimento","nascimento");

preencherCampo("dataAv","dataAv");

preencherCampo("altura","altura");

preencherCampo("peso","peso");

preencherCampo("imc","imc");

preencherCampo("gordura","gordura");

preencherCampo("sub","sub");

preencherCampo("tri","tri");

preencherCampo("supra","supra");

preencherCampo("abd","abd");

preencherCampo("predita","predita");

//========================================
// FOTO
//========================================

const foto = params.get("foto");

if (foto) {

    const img = document.getElementById("fotoAtleta");

    // Força o navegador a reconstruir a URL
    img.src = new URL(foto).href;

}