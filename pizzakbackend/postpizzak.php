<?php
//$pazon = $_POST("pazon");
$pnev = $_POST("pnev");
$par = $_POST("par");
require_once './databaseconnect.php';
$sql = "INSERT INTO pizza (paozon, pnev, par VALUE (NULL, ?, ?)";
$stml = $connection->prepare($sql);
$stml->bind_Param("ss", $pnev, $par);
if($stml->execute()){
    http_response_code(201);
    echo "Sikeresen hozzáadva";
}else{
    http_response_code(404);
    echo "Sikertelen hozzáadás";
}