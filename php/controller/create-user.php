<?php
    require_once(__DIR__ . "/../model/config.php");
<<<<<<< HEAD
    //these strings make it so you know when you mess up entering in their username or password
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);
    
    $salt = "$5$" . "rounds=500$" . uniqid(mt_rand(), true) . "$";
    
    $hashedPassword = crypt($password, $salt);
    //This allows me to create my user using password and username
    $query = $_SESSION["connection"]->query("INSERT INTO users SET "
            . "username = '$username',"
            . "password = '$hashedPassword',"
            . "salt = '$salt', "
=======
    
    //fliter the inputs that use put... they should be proper for each category.
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);
    
    //salt enables the password to be encrypted to prevent from just stealing password
    $salt = "$5$" . "rounds=5000$" . uniqid(mt_rand(), true) . "$";
    
    //representing password and salt
    $hashedPassword = crypt($password, $salt);
    
    $query = $_SESSION["connection"]->query("INSERT INTO users SET "
            . "email ='',"
            . "username = '$username',"
            . "password = '$hashedPassword',"
            . "salt = '$salt',"
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
            . "exp = 0, "
            . "exp1 = 0, "
            . "exp2 = 0, "
            . "exp3 = 0, "
            . "exp4 = 0");
    
    $_SESSION["name"] = $username;
<<<<<<< HEAD

    if($query) {
        //need this for ajax on index.php
        echo "true";
        //allows us to see the  link in the nav bar
    }
    else{
        echo "<p>" . $_SESSION["connection"]->error . "</p>";
    }
=======
         

    if($query){        
         //need this for Ajax on index.php 
         echo "true";
     }else{
         echo "<p>" . $_SESSION["connection"]->error . "</p>";
     }
    
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
