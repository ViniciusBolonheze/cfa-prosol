const params = new URLSearchParams(window.location.search);

function preencherCampo(id, parametro){

    const elemento = document.getElementById(id);

    if(!elemento) return;

    const valor = params.get(parametro);

    if(valor){
        elemento.textContent = decodeURIComponent(valor);
    }

}

preencherCampo("nome","nome");