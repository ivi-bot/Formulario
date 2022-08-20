let etiquetaSelect = document.querySelector('div.table-responsive > select');
let blank=document.querySelector('table > tbody');
let total=document.querySelector('div.col-sm-5 > h2');
etiquetaSelect.addEventListener('change', (event) => {
    blank.innerHTML = "";  
    total.innerHTML="Compradores";
    let id = event.target.value;
    let productoSeleccionado = (Number(id)-1).toString();
    fetch('https://actividad20munoz-default-rtdb.firebaseio.com/collection.json?orderBy="productoNombre"&equalTo="Producto%20'+productoSeleccionado+'"') .then(response => response.json())
    .then(dataCompradores => {
        let tamano=Object.keys(dataCompradores).length;
        console.log(tamano);
        if(tamano==0){
            blank.innerHTML = "No hay compradores de este producto";  
        }
        else{
            total.innerHTML+="  - Total: "+tamano.toString();
            for (const comprador of Object.keys(dataCompradores)) {
                const capital = dataCompradores[comprador].fechaCompra;
                plantilla = `
                        <tr>  
                            <td>${dataCompradores[comprador].id}</td>  
                            <td>${dataCompradores[comprador].comprador.nombre} ${dataCompradores[comprador].comprador.apellido}</td>   
                            <td>${dataCompradores[comprador].fechaCompra}</td>  
                            <td>${dataCompradores[comprador].valor}</td>  
                            <td>  
                                <a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>  
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>  
                            </td>  
                            </tr>   
                    `;
            blank.innerHTML += plantilla;
            }
        }     

    }).catch(console.error);


});