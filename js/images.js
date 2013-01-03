// matchMedia polyfill, Author: Scott Jehl, Paul Irish, Nicholas Zakas
window.matchMedia = window.matchMedia || (function (doc, undefinedx) {
  "use strict";

  var bool,
    docElem = doc.documentElement,
    refNode = docElem.firstElementChild || docElem.firstChild,
    // fakeBody required for <FF4 when executed in <head>
    fakeBody = doc.createElement("body"),
    div = doc.createElement("div");

  div.id = "mq-test-1";
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.style.background = "none";
  fakeBody.appendChild(div);

  return function (q) {
    div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

    docElem.insertBefore(fakeBody, refNode);
    bool = div.offsetWidth === 42;
    docElem.removeChild(fakeBody);

    return {
      matches: bool,
      media: q
    };
  };

}(document));

// Picturefill. Author: Scott Jehl, Filament Group, 2012
(function (w) {
  "use strict";

  w.picturefill = function () {
    var ps = w.document.getElementsByTagName("div");

    // Loop the pictures
    for (var i = 0, il = ps.length; i < il; i++) {
      if (ps[i].getAttribute("data-picture") !== null) {

        var sources = ps[i].getElementsByTagName("div"),
          matches = [];

        // See if which sources match
        for (var j = 0, jl = sources.length; j < jl; j++) {
          var media = sources[j].getAttribute("data-media");
          // if there's no media specified, OR w.matchMedia is supported 
          if (!media || (w.matchMedia && w.matchMedia(media).matches)) {
            matches.push(sources[j]);
          }
        }

      // Find any existing img element in the picture element
      var picImg = ps[i].getElementsByTagName("img")[0];

      if (matches.length) {
        if (!picImg) {
          picImg = w.document.createElement("img");
          picImg.alt = ps[i].getAttribute("data-alt");
          ps[i].appendChild(picImg);
        }

        picImg.src =  matches.pop().getAttribute("data-src");
      } else if (picImg) {
        ps[i].removeChild(picImg);
      }
    }
    }
  };

  // Run on resize and domready (w.load as a fallback)
  if (w.addEventListener) {
    w.addEventListener("resize", w.picturefill, false);
    w.addEventListener("DOMContentLoaded", function () {
      w.picturefill();
      // Run once only
      w.removeEventListener("load", w.picturefill, false);
    }, false);
    w.addEventListener("load", w.picturefill, false);
  } else if (w.attachEvent) {
    w.attachEvent("onload", w.picturefill);
  }

}(this));
