export default ()=> {
    const viewDifferent = `
    <section class="contenido_container3" id="container3">
    <div class = "img-derecha-post">
    <div class = "post">
    <h2 class="titulo-post">CREA TU POST</h2>
    <input type="text" class="text-post">
    <div class = "button-post">
    <button class="button-cancelar" id="cancelar">
        Cancelar
    </button>
    <button class="SubmitPost" id="enviar-post">
        Publicar
    </button>
    </div>
    </div>
    </div>
    </section>
    `
    
    const divElement = document.createElement('div')
    divElement.setAttribute('id','message');
    divElement.innerHTML = viewDifferent;
    return divElement;
}