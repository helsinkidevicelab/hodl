<?php
  //do not allow direct access
  if ( strpos(strtolower($_SERVER['SCRIPT_NAME']),strtolower(basename(__FILE__))) ) {
   header('HTTP/1.0 403 Forbidden');
   exit('403 Forbidden');
  }
?>

<div class="footer">
  <div class="wrapper">
    <div class="sponsors">
      <a href="http://kiskolabs.com" class="kisko" rel="external">Kisko Labs</a>
      <a href="http://developer.blackberry.com" class="blackberry" rel="external">Blackberry</a>
      <a href="http://www.coverupaccessories.com" class="coverup" rel="external">Cover-Up</a>
      <a href="http://developers.google.com" class="google" rel="external">Google</a>
      <a href="http://www.hpwebos.com" class="hp" rel="external">HP</a>
      <a href="http://www.developer.nokia.com" class="nokia" rel="external">Nokia</a>
      <a href="http://developer.sonymobile.com" class="sony" rel="external">Sony</a>
    </div>
  </div>
</div>
<script src="/js/scripts-v029.js"></script>
<script>
  // iOS fixes
  VS.scaleFix();
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
