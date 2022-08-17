/* 
window.addEventListener("DOMContentLoaded", async () => {
   const querySnapshot = await getTasks();
   querySnapshot.forEach((doc) => {
     console.log(doc.data());
 });
});



let etiquetaSelect = document.querySelector('div.table-responsive > select');

etiquetaSelect.addEventListener('change', (event) => {
    console.log(data);
    /*
    fetch('https://dataserverdaw.herokuapp.com/escritores/frases')
        .then(response => response.json())
        .then(dataFrases => {
            let id = event.target.value;
 
            var filtrado = dataFrases.frases.filter(d => d.id_autor == id);
 
            let arregloOption = etiquetaSelect.querySelectorAll('select > option');
            let filtroOption = Array.from(arregloOption).filter(d => d.value == id);
            let nombre = filtroOption[0].textContent;
 
            document.getElementById('informacion').innerHTML = "";
 
            for (let f of filtrado) {
                plantilla = `
                    <div class="col-lg-3">
                        <div class="test-inner ">
                            <div class="test-author-thumb d-flex">
                                <div class="test-author-info">
                                    <h4>${nombre}</h4>                                            
                                </div>
                            </div>
                            <span>${f.texto}</span>
                            <i class="fa fa-quote-right"></i>
                        </div>
                    </div>`;
                document.getElementById('informacion').innerHTML += plantilla;
 
            }
        }).catch(console.error);

});

*/



             /*
                let etiquetaSelect = document.querySelector('div.table-responsive > select');

                etiquetaSelect.addEventListener('change', (event) => {

                    document.getElementById('informacion').innerHTML += "";

                    cabecera = `
                    <main class="col-md-8 ms-sm-auto col-lg-10 px-md-4">
                        <div class="table-responsive">
                            <div class="table-wrapper">
                                <div class="table-title">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <h2>Products</h2>
                                        </div>
                                        <div class="col-sm-7">
                                            <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE147;</i> <span>Add New User</span></a>
                                            <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE24D;</i> <span>Export to Excel</span></a>                       
                                        </div>
                                    </div>
                                </div>
                                <table class="table table-striped table-hover">  
                                    <thead>  
                                    <tr>  
                                        <th>#</th>  
                                        <th>Comprador</th>  
                                        <th>Fecha de compra</th>  
                                        <th>Valor</th>  
                                        <th>Acciones</th>  
                                    </tr>  
                                    </thead>`;


                    document.getElementById('informacion').innerHTML += cabecera;

                    let productoSeleccionado = document.querySelector('select > option').textContent.trim();
/*
                    for (let i = 0; i < data.length; i++) {

                        let productoTabla = data[i].productoNombre;
                        if (productoSeleccionado.toUpperCase() === productoTabla.toUpperCase()) {
                            plantilla = `
                            <tbody>  
          <tr>  
            <td>${data[i].id}</td>  
               <td>${data[i].comprador}</td>   
               <td>${data[i].valor}</td>  
               <td>${data[i].fechaCompra}</td>  
               <td>  
                   <a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>  
                   <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>  
               </td>  
             </tr>  
           <% }); %>  
       </tbody>  `;
                            document.getElementById('informacion').innerHTML += plantilla;


                        }

                    }*/
            //    });

                /*
                final = `
                </table>  
 <div class="clearfix">
  <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
  <ul class="pagination">
      <li class="page-item disabled"><a href="#">Previous</a></li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item active"><a href="#" class="page-link">3</a></li>
      <li class="page-item"><a href="#" class="page-link">4</a></li>
      <li class="page-item"><a href="#" class="page-link">5</a></li>
      <li class="page-item"><a href="#" class="page-link">Next</a></li>
  </ul>
</div>
</div>
</div>  
</main>             
                                    `;
                    document.getElementById('informacion').innerHTML += final;
                




*/


      //      }




