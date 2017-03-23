var elementsCreation = function() {
  function addAttribute(htmlID, attribute, value) { // Use ID Selector (ex. "#htmlID")
    var thisElement = document.querySelector(htmlID);
    thisElement.setAttribute(attribute, value);
  }

  function attsInElements(htmlID, attrObj) {
    for (var eachAttr in attrObj) {
      addAttribute(htmlID, eachAttr, attrObj[eachAttr]);
    }
  }

  function createframeElem(elemType, parentID, htmlID, attrObj, className) {
    var newElem = document.createElement(elemType);
    newElem.id = htmlID;
    newElem.className = className;

    document.querySelector(parentID).appendChild(newElem);
    attsInElements("#" + htmlID, attrObj);
  }

  var groundAtts = {
    geometry: "primitive: plane; height: 50; width: 50",
    material: "color: black",
    rotation: "-90 0 0"
  };


  createframeElem("a-entity", "#wholeCanvas", "theGround", groundAtts, "baseElems");
};