class Zombie {
  constructor(health, strength, speed) {
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
    this._maxHealth = health;
    this.sprite = sprite;
  }
}

class FastZombie extends Zombie {
  constructor() {
    super(3, 1, 5);
  }
}

class StrongZombie extends Zombie {
  constructor() {
    super(3, 5, 1);
  }
}

class RangedZombie extends Zombie {
  constructor() {
    super(3, 3, 3);
  }
}
