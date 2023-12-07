<?php
require_once("../Model/M_DB.php");

try {

    $value = getTableMaxScore();
    
    if($value == null){
        $value = 0;
    }

    $arr = array();
    $arr["MaxScore"]=$value;

    header('Content-Type: application/json');
    echo json_encode($arr, JSON_PRETTY_PRINT);

} catch (Exception $e) {
    $arr = array();
    $arr["Error"] = $e;
}
?>