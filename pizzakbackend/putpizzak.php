<?php
$putadat = fopen("php://input", "r");
$raw_data = '';
while ($chunk = fread($putdata, 1024))
    $raw_data .= $chunk;
fclose($putadat);
$adatJSON = json_decode($raw_data);
$$pazon = $_POST("pazon");
$pnev = $_POST("pnev");
$par = $_POST("par");
require_once './databaseconnect.php';
$sql = "UPDATE `pizza` SET `pnev`=?, `par`=? WHERE pazon=?";
$stml = $connection->prepare($sql);
$stml->bind_Param("ssi", $pnev, $par, $pazon);
if($stml->execute()){
    http_response_code(201);
    echo "Sikeres modósitás";
}else{
    http_response_code(404);
    echo "Sikertelen modósítás";
}