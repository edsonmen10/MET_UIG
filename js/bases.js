async function mostrarServicios() {
  try {

      const url = 'http://localhost:3000/servicios.php';

      const resultado = await fetch(url);

       const db = await resultado.json();
      //  console.log(db);
      //   const { servicios} = db;

      var lista = document.getElementById("lista_planteles"); //Seleccionamos el select
    
        for(var i=0; i < db.length; i++){ 
            var option = document.createElement("option"); //Creamos la opcion
            option.innerHTML =db[i]['Nombre']; //Metemos el texto en la opción
            option.value = db[i]['idEntidad']; //Metemos el valor al option
            lista.appendChild(option); //Metemos la opción en el select
        }

        // $('#lista_planteles').on('change', function() {
        //   var id = $('#lista_planteles').val();
        //   console.log(id);
        //    $.post('cargar_carreras.php',{lista_planteles:id},function (data){
        //     if(data!=null) {
        //       console.log('se envio correcto')
        //     }
        //    })
        //   //  .done(function(listas_rep){
        //   //    $('#listas_planteles').html()
        //   //  })
        // })

      } catch (error) {
          console.log(error)
      }
  }

  async function mostrarCarreras() {
    $('#lista_planteles').on('change', function() {
         var id = $('#lista_planteles').val();
        //  console.log(id);
          ajax = objetoAjax();
          ajax.open("POST", "cargar_carreras.php", true);
          ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
          ajax.send("varid="+valor)
       })
  }

    mostrarServicios();
    mostrarCarreras();

