<?php
<<<<<<< HEAD

require_once(__DIR__ . "/../model/config.php");
$array = array(
    'exp' => '',
    'exp1' => '',
    'exp2' => '',
    'exp3' => '',
    'exp4' => '',
);


//makes sure to tell you if you mess up
$username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);
$query = $_SESSION["connection"]->query("SELECT * FROM users WHERE username = '$username'");

if ($query->num_rows == 1) {
    $row = $query->fetch_array();
    //accounts for users exp variables
    if ($row["password"] === crypt($password, $row["salt"])) {
        $_SESSION["authenticated"] = true;
        $array["exp"] = $row["exp"];
        $array["exp1"] = $row["exp1"];
        $array["exp2"] = $row["exp2"];
        $array["exp3"] = $row["exp3"];
        $array["exp4"] = $row["exp4"];
        $_SESSION["name"] = $username;
        echo json_encode($array);
    } else {
        //tells us that our username or password is incorrect
        echo "Invalid username or password";
    }
} else {
    //tells us that our username or password is incorrect
    echo "Invalid username or password";
}
=======
    require_once(__DIR__ . "/../model/config.php");

    $array = array(
        'exp' => '',
        'exp1' => '',
        'exp2' => '',
        'exp3' => '',
        'exp4' => '',
    );
    
    //taking input you typed and making sure it is string
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);  
    //check if the user is on the table
    //binary makes case sensitive
    $query = $_SESSION["connection"]->query("SELECT * FROM users WHERE BINARY username = '$username'");
    
    //if number of row is one, which means there is a user matching on the list
     if($query->num_rows == 1) {
         $row = $query->fetch_array();
         
        if($row["password"] === crypt($password, $row["salt"])) {
            $_SESSION["authenticated"] = true;
            $array["exp"] = $row["exp"];
            $array["exp1"] = $row["exp1"];
            $array["exp2"] = $row["exp2"];
            $array["exp3"] = $row["exp3"];
            $array["exp4"] = $row["exp4"];
            $_SESSION["name"] = $username;
                     
            
             echo json_encode($array);
             
         }
         else {
             echo "Invalid username and password";
         }
     }
     else {
         echo "Invalid username and password";
     }
     
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
