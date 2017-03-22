class Player {
  constructor( name, health, strength, speed ) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
    this.equipped = false;
    this._pack = [];
    this._maxHealth = health;
  }

  getPack() {
    return this._pack;
  }

  getMaxHealth() {
    return this._maxHealth;
  }

  checkPack() {
    var packList = this.getPack();
    var nameList = "";
    for (var items in packList) {
      nameList += packList[items].name + "\n";
    }
    console.log(nameList);
  }

  takeItem(item) {
    if (this.getPack().length < 3 || this.getPack().indexOf(item) > 0) {
      this._pack.push(item);
      console.log(item.name + " has been added to your pack!");
      return true;
    } else {
      console.log("Your pack is full!");
      return false;
    }
  }

  discardItem(item) {
    var itemIndex = this.getPack().indexOf(item);
    if (itemIndex === -1) {
      console.log("You don't have this item in your pack!");
      return false;
    } else {
      var removedItem = this.getPack().splice(itemIndex, 1);
      console.log(this.name + " has discarded " + item.name);
      return true;
    }
  }

  equip(weapon) {
    var weaponIndex = this.getPack().indexOf(weapon);
    if (weapon instanceof Weapon) {
      if(weaponIndex !== -1) {
        if (this.equipped === false) {
          this.equipped = weapon;
          this.discardItem(weapon);
        } else {
          this.getPack().splice(weaponIndex, 1, this.equipped);
          this.equipped = weapon;
        }
      } else {
        console.log("Don't own that weapon!");
        return false;
      }
    } else {
      console.log("That ain't a weapon!");
    }
  }

  eat(itemToEat) {
    var foodIndex = this.getPack().indexOf(itemToEat);
    if (itemToEat instanceof Food) {
      if (foodIndex !== -1) {
        this.discardItem(itemToEat);
        this.health += itemToEat.energy;
        if (this.health > this.getMaxHealth()) {
          this.health = this.getMaxHealth();
        }
      }
    }
  }

  useItem(item) {
    if (item instanceof Weapon) {
      this.equip(item);
    } else if (item instanceof Food) {
      this.eat(item);
    }
  }

  equippedWith() {
    if (this.equipped === false) {
      console.log("No item is equipped");
      return false;
    } else {
      console.log(this.name + " is equipped with " + this.equipped.name);
      return this.equipped.name;
    }
  }
}