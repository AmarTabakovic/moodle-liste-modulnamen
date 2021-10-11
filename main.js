// ==UserScript==
// @name         Moodle Liste Modulnamen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Moodle sucks lol
// @author       Amar Tabakovic
// @match        https://moodle.bfh.ch/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var spanTags = document.getElementsByClassName("media-body");

    var dict = [
        {kuerzel: "BTI1021", name: "Computer Science Basics"},
        {kuerzel: "BTI1101", name: "Interaction Design"},
        {kuerzel: "BTI1111", name: "Requirements Engineering"},
        {kuerzel: "BTI1401", name: "Algorithms and Data Structures"},
        {kuerzel: "BTI3001", name: "Project and Training 1"},
        {kuerzel: "BZG1155", name: "Diskrete Mathematik 1"},
        {kuerzel: "BZG3110", name: "Kommunikation 1"},
        {kuerzel: "BTI1001", name: "Programming in Java 1"},

    ]


    for (var i = 0; i < spanTags.length; i++) {
        for (var j = 0; j < dict.length; j++) {
            if (spanTags[i].textContent.match(dict[j].kuerzel)) {
                spanTags[i].innerHTML = dict[j].name;
               //break;
            }
        }
    }

    
})();
