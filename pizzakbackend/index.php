<?php
switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
        require_once 'pizzakbackend/getpizzak.php';
        break;
    case 'POST':
        require_once 'pizzakbackend/postpizzak.php';
        break;
    case 'DELETE':
        require_once 'pizzakbackend/deletepizzak.php';
        break;
    case 'PUT':
        require_once 'pizzakbackend/putpizzak.php';
        break;
    default: break;
}