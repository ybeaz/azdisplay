<?php

header("Access-Control-Allow-Origin: *");
/* */
//header("Access-Control-Allow-Origin: http://my.yacontent.com");
//header("Access-Control-Allow-Origin: http://r1.userto.com");
//header("Access-Control-Allow-Origin: http://userto.com");
//header('HTTP/1.1 200 OK');
header('Date: '.gmdate('l'));
//header('Server: Apache/2.0 (Unix)');
header('Cache-Control: max-age=0, must-revalidate');
header('Expires: '.gmdate('l'));
header('Last-Modified: '.gmdate('l'));
//header('ETag: "3e86-410-3596fbbc"');
//header('Content-Length: ');
header("Content-Type: text/html; charset=UTF-8");


//**********************************************************
// Шаг  Включаем код для отладки и определяем объект
//**********************************************************  
  //require_once("/home/u53393/my.yacontent.com/www/FirePHPCore/PHPDebug.php");
  //$debug = new PHPDebug();

  // Выводим "контрольные точки":
  //if (class_exists('PHPDebug')) { $debug->debug("Консоль wordXmlUpload.php "."", null, INFO); }

  
//**********************************************************
// Шаг  Получение серверных переменных
//**********************************************************  
  
  $HTTP_REFERER  = $_SERVER['HTTP_REFERER']; // => https://my.answerlot.com/dashboard.php
  //print_r($_SERVER);  
  
//**********************************************************
// Step starting session
//**********************************************************  
  
  session_start();

//**********************************************************
// Шаг  Фабрика загрузки классов классов классов
//**********************************************************  
  //https://phpfaq.ru/safemysql
  //https://github.com/colshrapnel/safemysql/blob/master/safemysql.class.php

  $factoryRequire    = [];
  $factoryRequire[0] = 'common';
  $factoryRequire[1] = 'safemysql';
  //$factoryRequire[2] = 'siteWindows';

foreach ($factoryRequire as $key0 => $str) {
  include_once '../../../services/Includes/'.$factoryRequire[$key0].'.class.php';
}

//**********************************************************
// Шаг  Creating new objects of a classes
//**********************************************************

  $securityFunctions = new securityFunctions();
  $commonFunctions   = new commonFunctions();
  //$siteWindows       = new siteWindows();

//**********************************************************
// Reading GET/POST data traditionally from xnr request
//**********************************************************

  $optGet      = (int) securityFunctions::stringSpecCharEscape($_GET['optGet']);
 
 
//**********************************************************
// Reading JSON POST using PHP
//**********************************************************
  
  $json = file_get_contents('php://input');
  $postJsonObj = json_decode($json);
  
  
//**********************************************************
// Adding usefull data
//**********************************************************  
  
  # Убераем лишние пробелы и делаем двойное шифрование. Вариант использовать https://www.php.su/functions/?crypt  
  
  $userIp  = $_SERVER['REMOTE_ADDR'];

  $dateTime  = date('Y-m-d H:i:s');

  //print_r(['$_GET' => $_GET, '$userIp' => $userIp, '$dateTime' => $dateTime]);


//**********************************************************
// Service Save a project
//**********************************************************  

  // Save / update a project with the user's credentials
  if ($optGet === 1) {
    $test = ['$optGet' => $optGet, '$userIp' => $userIp, '$dateTime' => $dateTime];
    $test = (object) $test;
    echo json_encode($test);
  }
