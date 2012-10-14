<?php
  //do not allow direct access
  if ( strpos(strtolower($_SERVER['SCRIPT_NAME']),strtolower(basename(__FILE__))) ) {
   header('HTTP/1.0 403 Forbidden');
   exit('403 Forbidden');
  }
?>

<div class="footer">
  <p>&copy; 2012 Helsinki Open Device Lab.</p>
</div>
<script src="/js/scripts-v028.js"></script>
<script>
  // iOS fixes
  VS.scaleFix();
  VS.hideUrlBar();
</script>
<script>
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-34490222-1']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
