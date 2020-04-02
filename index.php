<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="icon" href="https://img.icons8.com/dusk/64/000000/structural.png">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:400,700&display=swap" rel="stylesheet">
  <!-- Google Fonts Roboto -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <!-- Material Design Bootstrap -->
  <link rel="stylesheet" href="css/mdb.min.css">
  <!-- Your custom styles (optional) -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- Contact -->
<div class="container-fluid fixed-bg" id="project" style="background-image: url(img/mr-white-pattern.jpg);">

  <div class="container py-5" id='contacts'>
    <h1 class="text-uppercase text-center mb-3">Зв'язатися з нами</h1>
    <div style="width: 70px; height: 2px; background-color: #fb3; margin-left: auto; margin-right: auto;"></div>
    <p class="text-center my-3" style="font-size: 14px; color: rgb(134, 135, 139);">
      З вами зв'яжеться наш представник
    </p>
    
    <form class="form2 text-center" id="contact-form" name="contact-form" action="mail.php" method="POST">
      <input type="email" class="form2-field" name="email" placeholder="E-Mail" id="inputContact">
      <button class="btn2 btn2-primary btn2-inside uppercase" onclick="validateForm();">Відправити</button>
    </form>
    <div class="status"></div>
          
  </div>
</div>


  <!-- jQuery -->
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <!-- Bootstrap tooltips -->
  <script type="text/javascript" src="js/popper.min.js"></script>
  <!-- Bootstrap core JavaScript -->
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <!-- MDB core JavaScript -->
  <script type="text/javascript" src="js/mdb.min.js"></script>
  <!-- Your custom scripts (optional) -->
  <script type="text/javascript" src="js/script.js"></script>

</body>
</html>
