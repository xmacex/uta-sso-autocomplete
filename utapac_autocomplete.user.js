// ==UserScript==
// @name        UTAPAC wifi login autocomplete enabler
// @namespace   https://xmacex.wordpress.com/userscript/
// @include     https://utapacs.uta.fi/tino.cgi*
// @version     1.1
// @icon        http://www.uta.fi/favicon.ico
// @grant       none
// ==/UserScript==

// autocomplete
form = document.getElementsByTagName("form").item(0)
if(form.getAttribute("autocomplete") == "off") {
    form.removeAttribute("autocomplete")
    console.log("autocomplete was disabled by the service provider, but was forced enabled.")
}

// push the login button
// $(window).load(function(e) {
window.onload = (function(e) {
    console.log("pressing the login button now")
    document.getElementsByName('login')[0].click()
});

