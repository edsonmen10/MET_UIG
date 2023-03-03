
<?php

function obtenerServicios(): array
{

    try {
        require 'conexion.php';

        $sql = "SELECT * FROM planteles";
        $consulta = mysqli_query($db, $sql);
        
        //   echo "<pre>";
        //   var_dump(mysqli_fetch_all($consulta)); // fetch_all nos retorna todo // fetch_array fetch_assoc
        //   echo "</pre>";

        $i = 0;
        $servicios = [];
        while ($row = mysqli_fetch_assoc($consulta)) {
            $servicios[$i]['idEntidad'] = $row['idEntidad'];
            $servicios[$i]['cvePlantel'] = $row['cvePlantel'];
            $servicios[$i]['Nombre'] = $row['Nombre'];
            $i++;
        }
        return $servicios;
    } catch (\Throwable $th) {
         throw $th;

        //  sss var_dump($th);
    }
}

obtenerServicios();