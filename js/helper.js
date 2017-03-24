function hitZombie(event) {
  var thisZombie = document.getElementById(event.target.attributes.id.nodeValue);
  var wholeScene = document.querySelector("#wholeCanvas");
  var zomHealth = parseInt(event.target.attributes.health.value);
  zomHealth -= 1;
  if (zomHealth <= 0) {
    thisZombie.removeAttribute("animation");
    thisZombie.setAttribute("rotation", "0 0 90");
    thisZombie.setAttribute("position", "y", "0.125");
    console.log(event);
    //wholeScene.removeChild(thisZombie);
  }
  event.target.attributes.health.value = zomHealth;
}

function getPlayerLocation() {
  var playerCamera = document.querySelector("#playerCam");
  var playerPos =  playerCamera.attributes.position.value;

  return playerPos;
}