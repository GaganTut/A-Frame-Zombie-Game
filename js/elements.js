var elementsCreation = function() {
  var wholeScene = document.querySelector("#wholeCanvas");
  var playerCam = document.querySelector("#playerCam");
  var playerPosition = playerCam.position;


  function anyPosition() {
    var fourCorners = [{x: -25, y: 0, z: -25}, {x: 25, y: 0, z: -25}, {x: 25, y: 0, z: 25}, {x:-25, y: 0, z: 25}];
    return fourCorners[Math.floor(Math.random() * 4)];
  }

  function createZombie(attrObj) {
    var zombieObj = new attrObj(anyPosition());
    var newZombie = document.createElement("a-entity");
    newZombie.className = "mapZombie";
    newZombie.id = "zombie" + Math.floor(Math.random() * 100000);
    for (var key in zombieObj) {
      newZombie.setAttribute(key, zombieObj[key]);
    }

    wholeScene.appendChild(newZombie);
  }

  function zombieTimer() {
    createZombie(FastZombie);
  }

  return {
    createZombie,
    zombieTimer
  };
};