// ==UserScript==
// @name         Td Display Block
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://estore.skifalls.com.au/WebAdmin/instructorTools/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $('td').css('display','block');
    $('table').css('width','99%');
    $('td').css('width','99%');
    $('td').css('font-size','large');
})();