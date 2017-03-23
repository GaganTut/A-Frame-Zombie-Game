class Zombie {
  constructor(health, strength, speed) {
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
    this._maxHealth = health;
  }
}

class FastZombie extends Zombie {
  constructor() {
    super(3, 1, 5);
    this.material = "color: red";
  }
}

class StrongZombie extends Zombie {
  constructor() {
    super(3, 5, 1);
    this.material = "color: blue";
  }
}

class RangedZombie extends Zombie {
  constructor() {
    super(3, 3, 3);
    this.material = "color: black";
  }
}
