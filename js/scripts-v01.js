/*!
 *  opendevicelab.com
 *  (c) 2012 @viljamis
 */

var docElement=document.documentElement,browserUA=navigator.userAgent.toLowerCase();docElement.className=docElement.className.replace(/(^|\s)no-js preload(\s|$)/,"$1$2");if(-1<browserUA.search("windows phone os 7")||-1<browserUA.search("windows phone os 8")||-1<browserUA.search("msie 9.0"))docElement.className+=" tablefix";
(function(a){window.VS=window.VS||{};VS.viewportmeta=a.querySelector&&a.querySelector('meta[name="viewport"]');VS.ua=navigator.userAgent;VS.scaleFix=function(){VS.viewportmeta&&(/iPhone|iPad|iPod/.test(VS.ua)&&!/Opera Mini/.test(VS.ua))&&(VS.viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0",a.addEventListener("gesturestart",VS.gestureStart,!1))};VS.gestureStart=function(){VS.viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.9"};VS.hideUrlBar=
function(){/iPhone/.test(VS.ua)&&(!pageYOffset&&!location.hash)&&setTimeout(function(){window.scrollTo(0,1)},1E3)}})(document);
