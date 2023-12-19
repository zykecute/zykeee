<?php

session_start();
if (isset($_SESSION["user"])) {
   header("Location: login.php");
   
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Form</title>
  <link rel="stylesheet" href="login.css">
  <script src="script.js"></script>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
<div class="container">
    <?php
    if (isset($_POST["login"])) {
       $username = $_POST["username"];
       $password = $_POST["password"];
        require_once "database.php";
        $sql = "SELECT * FROM users WHERE username = '$username'";
        $result = mysqli_query($conn, $sql);
        $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($user) {
            if (password_verify($password, $user["password"])) {
                session_start();
                $_SESSION["user"] = "yes";
                header("Location: zyke.html");
                die();
            }else{
                echo "<div class='alert alert-danger'>Password does not match</div>";
            }
        }else{
            echo "<div class='alert alert-danger'>Username does not match</div>";
        }
    }
    ?>
  <div class="wrapper">
    <form action="login.php" method="post">
    <h1 class="pasko"> L o g i n</h1>
      <div class="input-box">
        <input type="text" placeholder="ID Number or Username" name="username">
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Password" id="password" required  name="password"  class="pass">
        <i class='bx bxs-lock-alt' ></i>
      </div>
      <div class="remember-forgot">
        <label><input type="checkbox">Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <div class="input-box">
                <input type="submit" class="btn btn-primary" value="Login" name="login">
            </div>
      <div class="register-link">
        <p>Dont have an account? <a href="register.php">Register</a></p>
      </div>
  
    </form> 
  </div>
</body>
</html>