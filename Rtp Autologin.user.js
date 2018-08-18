// ==UserScript==
// @name         Rtp Autologin
// @namespace    http://gerrit.com.au/
// @version      0.2
// @description  Auto click the login button on the rtp login page.!
// @author       You
// @match        https://estore.skifalls.com.au/WebAdmin/instructorTools/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function doLogin(){
        var a = document.getElementsByName('loginBtn');
        if ( a.length == 1){
            console.log('clicking');
            a[0].click();
        }
    }
    var a = document.getElementsByName('loginBtn');
    if ( a.length == 1){ // wait for form to be auto filled.
        setTimeout(doLogin,2000);
    }
})();