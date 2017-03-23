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
  constructor(health, strength, speed) {
    super(health, strength, speed);
  }
}

class StrongZombie extends Zombie {
  constructor(health, strength, speed) {
    super(health, strength, speed);
  }
}

class RangedZombie extends Zombie {
  constructor(health, strength, speed) {
    super(health, strength, speed);
  }
}
