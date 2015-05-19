<?php
<<<<<<< HEAD
require_once(__DIR__ . "/../model/config.php");

function authenticateUser() {
    if(!isset($_SESSION["authenticated"])) {
        return false;
    }
    else {
        if($_SESSION["authenticated"] != true) {
            return false;
        }
        else {
            return true;
        }
    }
}
=======
    require_once(__DIR__ . "/../model/config.php");
    
    //if the users are not authenticated, they cannot access to this page
    function authenticateUser() {
        if(!isset($_SESSION["authenticated"])) {
            return false;
        }
        else {
            if($_SESSION["authenticated"] !== true) {
                return false;
            }
            else {
                return true;
            }
        }
    }
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
