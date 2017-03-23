var elementsCreation = function() {
  var wholeScene = document.querySelector("#wholeScene");

  function createframeElem(elemType, parentID, htmlID, attrObj, className) {
    var newElem = document.createElement(elemType);
    newElem.id = htmlID;
    newElem.className = className;

    document.querySelector(parentID).appendChild(newElem);
    attsInElements("#" + htmlID, attrObj);

    this.addEventListener("click", function(event) {
      this.health -= 1;
      if (this.health <= 0) {
        removeElement(event.target);
      }
    });
    this.addEventListener("load", (function(){
      newElem.emit("load");
    })());
  }

  function addAttribute(htmlID, attribute, value) { // Use ID Selector (ex. "#htmlID")
    var thisElement = document.querySelector(htmlID);
    thisElement.setAttribute(attribute, value);
  }

  function attsInElements(htmlID, attrObj) {
    for (var eachAttr in attrObj) {
      addAttribute(htmlID, eachAttr, attrObj[eachAttr]);
    }
  }

  function createEvent(parentID, attrObj) {
    var newAnim = document.createElement("a-animation");
    for (var objKey in attrObj) {
      newAnim.setAttribute(objKey, attrObj[objKey]);
    }

    var parent = document.querySelector(parentID);
    parent.appendChild(newAnim);
  }

  var animAtts = {
    attribute: "position",
    begin: "load",
    dur: "1000",
    to: "0 0 0",
    repeat: "indefinite",
    direction: "normal"
  };

  function randomPosition() {
    var fourCorners = ["-25 2 -25", "25 2 -25", "25 2 25", "-25 2 25"];
    return fourCorners[Math.floor(Math.random() * 3)];
  }

  function createZombie(zomType) {
    var newZombie = new zomType();
    newZombie.position = randomPosition();
    newZombie.geometry = "primitive: box; height: 2; width: 0.5; depth: 0.5";

    createframeElem("a-entity", "#wholeCanvas", "myZombie", newZombie, "zombiesss");

    createEvent("#myZombie", animAtts);
  }

  function zombieTimer() {
    createZombie(FastZombie);
  }

  return {
    createZombie,
    createframeElem,
    zombieTimer
  };
};