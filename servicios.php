<?php
require 'cargar_datos.php';
$servicios = obtenerServicios();
echo json_encode($servicios);