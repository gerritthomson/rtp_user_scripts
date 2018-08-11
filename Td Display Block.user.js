// ==UserScript==
// @name         Td Display Block
// @namespace    http://gerrit.com.au/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        https://estore.skifalls.com.au/WebAdmin/instructorTools/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $('td').css('display','block');
    $('table').removeProp('width');
    $('td').removeProp('width');
    $('td').css('line-height','1em');
    $('td').css('font-size','5em');
    $('td').removeProp('align');
    $('a').css({"font-size":'1em','line-height':'1em'});
    $('table[border=1]').prop('border','5');
    $('[name="scheduleBtn"]').css('font-size','1em');
})();