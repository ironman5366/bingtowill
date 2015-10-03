// ==UserScript==
// @run-at document-start
// @name        Bing to W.I.L.L.
// @namespace   will@willbeddow.com
// @description Bing redirection code found from https://greasyfork.org/en/scripts/11308-bing-to-google/code
// @description This will redirect you to Google from W.I.L. after you search.
// @include     http://*.bing.com/search?*
// @include     https://*.bing.com/search?*
// @version     1
// @grant       none
// ==/UserScript==
if (window.location.href.indexOf("bing.com/search") > -1){
  console.log("started")
  document.title = "W.I.L.L.";
  var commandparamwhole = document.URL.match(/q\=[^&]*/);
  var commandparam=(commandparamwhole[0]).split("q=")[1];
  var newurl = "http://willbeddow.com/cgi-bin/authentication.cgi?user=public&command="+commandparam
  console.log("newurl set")
  console.log(document.URL)
  if (newurl != document.URL) location.replace(newurl);
}
