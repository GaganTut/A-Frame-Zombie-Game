class Zombie {
  constructor(health, strength, speed, position) {
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
    this._maxHealth = health;
    this.position = position;
    this["obj-model"] = "obj: #myObj; mtl: #myMtl";
    this.animation = `property: position; dir: normal; dur: 10000; loop: false; to: ${getPlayerLocation()}`;
    this.onclick = "hitZombie(event)";
  }
}

class FastZombie extends Zombie {
  constructor(position) {
    super(3, 1, 5, position);
    this.material = "color: red";
  }
}

class StrongZombie extends Zombie {
  constructor(position) {
    super(3, 5, 1, position);
    this.material = "color: blue";
  }
}

class RangedZombie extends Zombie {
  constructor(position) {
    super(3, 3, 3, position);
    this.material = "color: black";
  }
}
