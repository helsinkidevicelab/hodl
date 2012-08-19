/*!
 *  opendevicelab.com
 *  (c) 2012 @viljamis
 */

// Variables
var docElement = document.documentElement,
  browserUA = navigator.userAgent.toLowerCase();

// Remove "preload" and "no-js" classes from <html> element
docElement.className = docElement.className.replace(/(^|\s)no-js preload(\s|$)/, '$1$2');