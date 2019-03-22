<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
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
header("Content-Type': 'text/plain; charset=UTF-8");
//'Content-Type': 'application/json',
//Content-Type: text/html; charset=UTF-8

//**********************************************************
// Шаг  Получение серверных переменных
//**********************************************************  
  
  $HTTP_REFERER  = $_SERVER['HTTP_REFERER']; // => https://my.answerlot.com/dashboard.php
  //print_r($_SERVER);  

//**********************************************************
// Шаг  Фабрика загрузки классов классов классов
//**********************************************************  
  //https://phpfaq.ru/safemysql
  //https://github.com/colshrapnel/safemysql/blob/master/safemysql.class.php

  $factoryRequire    = [];
  $factoryRequire[0] = 'common';
  $factoryRequire[1] = 'safemysql';
  $factoryRequire[2] = 'webAnalytics';

foreach ($factoryRequire as $key0 => $str) {
  include_once '../../../services/Includes/'.$factoryRequire[$key0].'.class.php';
}

//**********************************************************
// Шаг  Creating new objects of a classes
//**********************************************************

  $securityFunctions = new securityFunctions();
  $commonFunctions   = new commonFunctions();
  $webAnalytics      = new webAnalytics();


//**********************************************************
// Step starting session
//**********************************************************  


// Make sure use_strict_mode is enabled.
// use_strict_mode is mandatory for security reasons.
ini_set('session.use_strict_mode', 1);
ini_set('session.gc_maxlifetime', (60 * 30));
$securityFunctions::sessionStart();

//**********************************************************
// Reading GET/POST data traditionally from xnr request
//**********************************************************

  $optGet = securityFunctions::stringSpecCharEscape($_GET['optGet']);
  $target = securityFunctions::stringSpecCharEscape($_GET['target']);
  $width  = securityFunctions::stringSpecCharEscape($_GET['width']);
  $height = securityFunctions::stringSpecCharEscape($_GET['height']);
 
//**********************************************************
// Reading JSON POST using PHP
//**********************************************************
  
  $json = file_get_contents('php://input');
  $postDataObj = json_decode($json);


//**********************************************************
// Adding usefull data
//**********************************************************  
  
  // Убераем лишние пробелы и делаем двойное шифрование. Вариант использовать https://www.php.su/functions/?crypt  
  
  $userIp  = $_SERVER['REMOTE_ADDR'];
  $dateTime  = date('Y-m-d H:i:s');

  //print_r(['$_GET' => $_GET, '$userIp' => $userIp, '$dateTime' => $dateTime]);


//**********************************************************
// Service Save a project
//**********************************************************  


 // Return report to developers and market analytics GET_USER_ANALYTICS_REPORT
 if ($optGet === 'guar') {
  //print_r($data);

  $dataOutput      = $webAnalytics->getUserAnalyticsReport();
  //print_r($dataOutput);
  $dataOutput      = $webAnalytics->getArrOfObjToStringCsv($dataOutput);
  echo $dataOutput;

}


 // Save user visit actions 'SAVE_USER_VISIT_ACTIONS'
 if ($postDataObj->optPost === 'suva') {
  //print_r($data);

  $data            = $postDataObj;
  unset($data->optPost);
  unset($data->type);
  $data->PHPSESSID = $_SESSION['PHPSESSID'];
  $data->finish    = $_SESSION['dateTime'];
  $dataOutput      = $webAnalytics->getUpdatedSession($data);
  print_r(['$dataOutput' => $dataOutput, '$data' => $data, '$_SESSION' => $_SESSION]);
  echo json_encode($dataOutput);
  
  //$test = (object) $test;
  //echo json_encode($test);
}

  // Save user visit actions 'START_USER_SESSION'.
  // Endpoint = 'https://userto.com/api/apiP2p.php'.
  if ($optGet === 'sus') {
    $data            = new stdClass();
    $data->PHPSESSID = $_SESSION['PHPSESSID'];
    $data->start     = $_SESSION['dateTime'];
    $data->finish    = '';
    $data->ip        = $userIp;
    $data->target    = $target;
    $data->email     = '';
    $data->msg       = '';
    $data->actionLog = '';
    $data->width     = $width;
    $data->height    = $height;
    $dataOutput      = $webAnalytics->getUpdatedSession($data);
    print_r(['$dataOutput' => $dataOutput, '$data' => $data, '$_SESSION' => $_SESSION]);
    echo json_encode($dataOutput);
    return;
  }


 