<?php
require_once("../Model/M_DB.php");

try {
    //Get Player Parameter
    if (isset($_GET['Player']) && $_GET['Player']) {
        $Player = $_GET['Player'];
    } else {
        throw new Exception();
    }

    //Get Score Parameter
    if (isset($_GET['Score']) && $_GET['Score']) {
        $Score = $_GET['Score'];
    } else {
        throw new Exception();
    }

    $value = DB_setNewScore($Player, $Score);

    $arr = array();
    $arr["Success"] = $value;

    header('Content-Type: application/json');
    echo json_encode($arr, JSON_PRETTY_PRINT);

} catch (Exception $e) {
    $arr = array();
    $arr["Error"] = $e;
    
    header('Content-Type: application/json');
    echo json_encode($arr, JSON_PRETTY_PRINT);
}
?>