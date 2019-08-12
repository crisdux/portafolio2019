const grid = new Muuri('.grid',{
    layout:{
         rounding:false   //grilla automatica desactivada
    }
});

window.addEventListener('load', () =>{
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');
});