// ==UserScript==
// @name        UTA SSO autocomplete enabler
// @namespace   https://xmacex.wordpress.com/userscript/
// @include     https://sso.uta.fi/cas/login*
// @version     1.1
// @updateURL   https://github.com/xmacex/uta-sso-autocomplete/raw/master/uta_sso_autocomplete.user.js
// @icon        http://www.uta.fi/favicon.ico
// @grant       none
// ==/UserScript==

jQuery("input#username").removeAttr("autocomplete")
jQuery("input#password").removeAttr("autocomplete")
