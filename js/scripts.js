/*!
 *  opendevicelab.com
 *  (c) 2012 @viljamis
 */

// Variables
var docElement = document.documentElement,
  browserUA = navigator.userAgent.toLowerCase();

// Remove "preload" and "no-js" classes from <html> element
docElement.className = docElement.className.replace(/(^|\s)no-js preload(\s|$)/, '$1$2');

// If Windows Mobile 7x, 8x or Explorer 9
if ((browserUA.search('windows phone os 7') > -1) || 
(browserUA.search('windows phone os 8') > -1) || 
(browserUA.search('msie 9.0') > -1)) {
  docElement.className = docElement.className + ' tablefix';
}

(function (document) {

  window.VS = window.VS || {};

  // Fix for iPhone viewport scale bug
  VS.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
  VS.ua = navigator.userAgent;

  VS.scaleFix = function () {
    if (VS.viewportmeta && /iPhone|iPad|iPod/.test(VS.ua) && !/Opera Mini/.test(VS.ua)) {
      VS.viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
      document.addEventListener('gesturestart', VS.gestureStart, false);
    }
  };

  VS.gestureStart = function () {
    VS.viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.9';
  };

  VS.hideUrlBar = function () {
    if (/iPhone/.test(VS.ua) && !pageYOffset && !location.hash) {
      setTimeout(function () {
        window.scrollTo(0, 1)
      }, 1000)
    }
  };

})(document);