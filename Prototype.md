## Padrão Prototype

### Motivação:
Imagine que você está desenvolvendo um jogo onde há diferentes tipos de inimigos e personagens. Cada entidade pode ter diferentes atributos como vida, velocidade e dano. Criar novas instâncias repetidamente pode ser custoso, especialmente se cada entidade exige cálculos ou inicializações complexas.

O Prototype resolve esse problema permitindo que um objeto seja clonado rapidamente, mantendo seus atributos, sem precisar ser recriado do zero. Isso economiza processamento e mantém a performance do sistema.

@startuml
' Interface Prototype
interface Prototype {
    + clone() : Prototype
}

' Classe base Entity
class Entity implements Prototype {
    + type : String
    + health : int
    + speed : int
    + damage : int
    + clone() : Prototype
    + reset(health, speed, damage)
}

' Subclasses específicas
class Enemy extends Entity {
    + ai : String
}

class Player extends Entity {
    + controller : int
}

Entity ..|> Prototype
Enemy ..|> Entity
Player ..|> Entity
@enduml


## Exemplo:
```js

class Entity {
    constructor(type, health, speed, damage) {
        this.type = type;
        this.health = health;
        this.speed = speed;
        this.damage = damage;
    }

    // Implementação do padrão Prototype
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

// Criando um inimigo e clonando-o
const enemy1 = new Enemy(5, 1, 3, "melee");
const enemy2 = enemy1.clone(); 
// Clone rápido do inimigo existente
```

& Implementado por: Adriano Victor e Pedro Victor Hipolito