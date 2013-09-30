// ==UserScript==
// @name        UTAPAC wifi login autocomplete enabler
// @namespace   https://xmacex.wordpress.com/userscript/
// @include     https://utapacs.uta.fi/tino.cgi*
// @version     1.0
// @icon        http://www.uta.fi/favicon.ico
// @grant       none
// ==/UserScript==

// autocomplete
form = document.getElementsByTagName("form").item(0)
if(form.getAttribute("autocomplete") == "off") {
    form.removeAttribute("autocomplete")
    console.log("autocomplete was disabled by the service provider, but was forced enabled.")
}