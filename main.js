const grid = new Muuri('.grid',{
    layout:{
         rounding:false   //grilla automatica desactivada
    }
});

window.addEventListener('load', () =>{
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    const enlaces= document.querySelectorAll('#categorias a');
    //filtrado de imagenes por cateogiras
    enlaces.forEach((elemento)=>{
        elemento.addEventListener('click',(e)=>{
            e.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            e.target.classList.add('activo');

            const categoria = e.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);

        });
    });

    //filtrado por barra de busqueda 
    document.querySelector('#barra-busqueda').addEventListener('input', (e) =>{
        const busqueda = e.target.value;
        grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
    });

    //listener para las imagenes
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento)=>{
        
        elemento.addEventListener('click',() =>{
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

            overlay.classList.add('activo');
            document.querySelector('#overlay img').src=ruta;
            document.querySelector('#overlay .descripcion').innerHTML=descripcion;
        })
    });

      //cerrar modal
      document.querySelector('#btn-cerrar-modal').addEventListener('click',() =>{
        overlay.classList.remove('activo');
      });

      //listerner del overlay
      overlay.addEventListener('click',(e) =>{
        e.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
      });
});