const grid = new Muuri('.grid',{
    layout:{
         rounding:false   //grilla automatica desactivada
    }
});

window.addEventListener('load', () =>{
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    const enlaces= document.querySelectorAll('#categorias a');

    enlaces.forEach((elemento)=>{
        elemento.addEventListener('click',(e)=>{
            e.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            e.target.classList.add('activo');

            const categoria = e.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);

        });
    });
});