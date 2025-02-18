
// Classe base para itens de confeitaria
class Pastry {
    constructor(name) {
        this.name = name;
    }

    clone() {
        const cloneConstructor = this.constructor;
        const properties = Object.assign({}, this);
        return new cloneConstructor(...Object.values(properties));
    }
}

// Produtos concretos (protótipos)
class Cake extends Pastry {
    constructor(name, layers) {
        super(name);
        this.layers = layers;
    }
}

class Cupcake extends Pastry {
    constructor(name, flavor) {
        super(name);
        this.flavor = flavor;
    }
}

class Cookie extends Pastry {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
}

// Ferramenta para gerenciar protótipos
class PastryTool {
    constructor() {
        this.prototypes = {};
    }

    registerPrototype(key, prototype) {
        this.prototypes[key] = prototype;
    }

    createPastry(key) {
        const prototype = this.prototypes[key];
        if (!prototype) {
            throw new Error(`Prototype not registered for key: ${key}`);
        }
        return prototype.clone();
    }
}

// Criando protótipos iniciais
const cakePrototype = new Cake("Chocolate Cake", 3);
const cupcakePrototype = new Cupcake("Vanilla Cupcake", "Vanilla");
const cookiePrototype = new Cookie("Chocolate Chip Cookie", "Large");

// Registrando protótipos na ferramenta
const pastryTool = new PastryTool();
pastryTool.registerPrototype("cake", cakePrototype);
pastryTool.registerPrototype("cupcake", cupcakePrototype);
pastryTool.registerPrototype("cookie", cookiePrototype);

// Criando novas instâncias com base nos protótipos
const newCake = pastryTool.createPastry("cake");
const newCupcake = pastryTool.createPastry("cupcake");
const newCookie = pastryTool.createPastry("cookie");

console.log(newCake);
console.log(newCupcake);
console.log(newCookie);
