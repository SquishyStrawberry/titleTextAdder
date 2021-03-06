// ==UserScript==
// @name         TitleText Adder
// @version      0.1
// @description  Adds the title text, when present, under an image.
// @author       Myst
// @match        *
// @grant        none
// ==/UserScript==
var XKCDExtra = true;

function addText(image) {
    var text = image.title;
    if (text) {
        var textElement = document.createElement("p");
        textElement.style["text-align"] = "center";
        textElement.style["font-style"] = "italic";
        textElement.style["color"] = "grey";
        textElement.innerText = text;
        if (XKCDExtra && window.location.hostname.match("^(www.)?xkcd.com")) {
            image.parentNode.insertBefore(textElement, image);
        }
        else {
            image.parentNode.insertBefore(textElement, image.nextSibling);
        }
    }
}

function execAll(onlyImages) {
    var images = document.images;
    for (var i=0; i < images.length; i++) {
        addText(images[i]);
    }
}

execAll();