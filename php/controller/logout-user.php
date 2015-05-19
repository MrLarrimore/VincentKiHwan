<?php
    require_once(__DIR__ . "/../model/config.php");
<<<<<<< HEAD
    require_once(__DIR__ . "/../controller/login-verify.php");
    
    if(!authenticateUser()) {
        header("location: " . $path . "index.php");
        die();
    }
    
    unset($_SESSION["authenticated"]);
    
    session_destroy();
    header("location: " . $path . "index.php");
=======
    
    //nullify authenticated and direct to the index page
    unset($_SESSION["authenticated"]);
    
    session_destroy();
    header("Location: " . $path . "index.php");
    
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
