<?php
  //do not allow direct access
  if ( strpos(strtolower($_SERVER['SCRIPT_NAME']),strtolower(basename(__FILE__))) ) {
   header('HTTP/1.0 403 Forbidden');
   exit('403 Forbidden');
  }
?>

<!DOCTYPE html>
<!--[if lt IE 9]><html class="no-js preload ie" lang="en"><![endif]-->
<!--[if gte IE 9]><!--><html class="no-js preload" lang="en"><!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <title><?php echo $page_title; ?></title>
    <meta name="author" content="@viljamis">
    <meta name="description" content="<?php echo $page_description; ?>">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="/css/style-v030.css">
    <script src="/js/images.js"></script>
    <script src="//use.typekit.net/vhc5ixw.js"></script>
    <script>try{Typekit.load();}catch(e){}</script>
