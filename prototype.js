class Entity {
    constructor(type, health, speed, damage) {
        this.type = type;
        this.health = health;
        this.speed = speed;
        this.damage = damage;
    }

    clone() {
        const clone = this.constructor;
        const properties = Object.assign({}, this);
        return new clone(...Object.values(properties));
    }

    reset(health, speed, damage) {
        this.health = health;
        this.speed = speed;
        this.damage = damage;
    }
}

class Enemy extends Entity {
    constructor(health, speed, damage, ai) {
        super("enemy", health, speed, damage);
        this.ai = ai;
    }
}

class Player extends Entity {
    constructor(health, speed, damage, controller) {
        super("player", health, speed, damage);
        this.controller = controller;
    }
}


const enemy1 = new Enemy(5, 1, 3, "melee");
const enemy2 = enemy1.clone(); 
