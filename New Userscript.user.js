// ==UserScript==
// @name         Rtp Autologin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tampermonkey.net/index.php?version=4.7.5788&ext=fire&updated=true
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var a = document.getElementsByName('loginBtn');
    if ( a.length == 1){
        a[0].click();
    }
})();