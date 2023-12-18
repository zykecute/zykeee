<?php
session_start();
if (isset($_SESSION["user"])) {
   header("Location: register.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="test.js"></script>
    <link rel="stylesheet" href="register.css">
    <script src="pres.js"></script>
    <title>Document</title>
</head>
<body>
<div class="container">
        <?php
        if (isset($_POST["submit"])) {
           $fullname = $_POST["fullname"];
           $username = $_POST["username"];
           $password = $_POST["password"];
           $passwordRepeat = $_POST["repeat_password"];
           
           $passwordHash = password_hash($password, PASSWORD_DEFAULT);

           $errors = array();
           
           if (empty($fullname) OR empty($username) OR empty($password) OR empty($passwordRepeat)) {
            array_push($errors,"All fields are required");
           }
           if (strlen($password)<8) {
            array_push($errors,"Password must be at least 8 charactes long");
           }
           if ($password!==$passwordRepeat) {
            array_push($errors,"Password does not match");
           }
           require_once "database.php";
           $sql = "SELECT * FROM users WHERE username = '$username'";
           $result = mysqli_query($conn, $sql);
           $rowCount = mysqli_num_rows($result);
           if ($rowCount>0) {
            array_push($errors,"Username already exists!");
           }
           if (count($errors)>0) {
            foreach ($errors as  $error) {
                echo "<div class='alert alert-danger'>$error</div>";
            }
           }else{
            
            $sql = "INSERT INTO users (full_name, username, password) VALUES ( ?, ?, ? )";
            $stmt = mysqli_stmt_init($conn);
            $prepareStmt = mysqli_stmt_prepare($stmt,$sql);
            if ($prepareStmt) {
                mysqli_stmt_bind_param($stmt,"sss",$fullname, $username,  $passwordHash);
                mysqli_stmt_execute($stmt);
                echo "<div class='alert alert-success'>You are registered successfully.</div>";
            }else{
                die("Something went wrong");
            }
           }
          

        }
        ?>
      <div class="wrapper">
      <form action="register.php" method="post">
      <h1 class="pasko">R e g i s t e r</h1>
            <div class="input-box">
                <input type="text" class="form-control" name="fullname" placeholder="Full Name:" autocomplete="off">
            </div>
            <div class="input-box">
                <input type="text" class="form-control" name="username" placeholder="Username:"
                autocomplete="off">
            </div>
            <div class="input-box">
                <input type="password" class="form-control" name="password" placeholder="Password:">
            </div>
            <div class="input-box">
                <input type="password" class="form-control" name="repeat_password" placeholder="Repeat Password:">
            </div>
            <div class="input-box">
                <input type="submit" class="btn btn-primary" value="Register" name="submit">
            </div>
      </form>
          <div class="remember-forgot">
            <label><input type="checkbox">Remember Me</label>
          </div>
      </br>
        <div><p>Already Registered <a href="login.php">Login Here:</a></p></div>
        </br>
          </div>
      </div>
</body>
</html>
