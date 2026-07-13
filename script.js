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

async function compartilharPDF(){
 const btn=document.getElementById('btnCompartilharPDF');
 if(btn) btn.style.display='none';
 const nome=(document.getElementById('nome')?.textContent||'Atleta').trim();
 const opt={
   margin:[0,0,0,0],
   filename:`Ficha CFA Prosol - ${nome}.pdf`,
   image:{type:'jpeg',quality:1},
   html2canvas:{scale:4,useCORS:true,allowTaint:false,backgroundColor:'#ffffff',scrollY:0},
   pagebreak:{mode:['avoid-all','css']},
   jsPDF:{unit:'mm',format:'a4',orientation:'portrait',compress:true}
 };
 try{
   const worker=html2pdf().set(opt).from(document.querySelector('.pagina'));
   const pdfBlob=await worker.outputPdf('blob');
   const file=new File([pdfBlob],`Ficha CFA Prosol - ${nome}.pdf`,{type:'application/pdf'});
   if(navigator.canShare && navigator.canShare({files:[file]})){
      await navigator.share({files:[file],title:'Ficha CFA Prosol'});
   }else{
      html2pdf().set(opt).from(document.querySelector('.pagina')).save();
   }
 }catch(e){
   console.error(e);
   html2pdf().set(opt).from(document.querySelector('.pagina')).save();
 }finally{
   if(btn) btn.style.display='';
 }
}
document.getElementById('btnCompartilharPDF')?.addEventListener('click',compartilharPDF);
