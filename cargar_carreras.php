<?php
function obtenerCarreras(): array
{

    try {
        require 'conexion.php';

         $id2 = $_POST['varid'];
         echo $id2;

        $sql = "SELECT * FROM carreras WHERE idEntidad = $id2";
        $consulta = mysqli_query($db, $sql); 
        
        // echo "<pre>";
        //   var_dump(mysqli_fetch_all($consulta)); // fetch_all nos retorna todo // fetch_array fetch_assoc
        //   echo "</pre>";

        $i = 0;
        $carreras = [];
        while ($row = mysqli_fetch_assoc($consulta)) {
            $carreras[$i]['acuerdo'] = $row['acuerdo'];
            $carreras[$i]['nombre'] = $row['nombre'];
            $carreras[$i]['clave'] = $row['clave'];
            $carreras[$i]['cveCarrera'] = $row['cvCarrera'];
            $carreras[$i]['idEntidad'] = $row['idEntidad'];
            $i++;
        return $carreras;
        }
    } catch (\Throwable $th) {
        // throw $th;

       // sss var_dump($th);
   }    


}

obtenerCarreras();