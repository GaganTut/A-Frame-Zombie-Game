(function() {
  var anim = elementsCreation();

  var loadZombies = setInterval(anim.zombieTimer, 5000);
  var zombieAnim = setInterval(anim.zombieChase, 1000);

})();