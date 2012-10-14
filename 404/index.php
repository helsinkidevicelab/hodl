<?php
$page_title = "404 Error, Page not found";
$page_description = "Page not found";

include($_SERVER["DOCUMENT_ROOT"]."/includes/header.php");
?>
  </head>
  <body>
    <div class="header">
      <img src="/img/logo_packed.png" class="logo" alt="Logo">
      <img src="/img/office-sml.jpg?full=/img/office-mdm.jpg" class="illustration" alt="Helsinki Open Device Lab">
      <div class="wrapper">
        <div class="m_wrap">
          <div class="nav">
            <img src="/img/logo_packed.png" class="logo sec" alt="Logo">
            <h1><b>Helsinki</b> <i>open device lab</i></h1>
            <a href="http://opendevicelab.com/" class="button">Go to front page</a>
          </div>
        </div>
        <h2><span>404 Error. The page you've requested cannot be found. Go to <a href="http://opendevicelab.com/">front page</a> or try checking the URL for errors, and then hit the refresh button on your browser.</span></h2>
      </div>
    </div>
    <div class="section about">
      <div class="wrapper">
      </div>
    </div>
    <?php include($_SERVER["DOCUMENT_ROOT"]."/includes/footer.php"); ?>
  </body>
</html>
