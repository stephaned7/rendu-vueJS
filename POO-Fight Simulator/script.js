class Character {
    constructor(name, race, health, attackPower) {
        this.name = name;
        this.race = race;
        this.health = health;
        this.attackPower = attackPower;
        this.level = 1;
        
    }

    info() {
        return `Pseudo ${this.name}, Classe ${this.race}, Santé ${this.health}, Puissance d'attaque ${this.attackPower}, Niveau ${this.level}`;
    }

    levelUp() {
        this.level++;
        console.log(`${this.name} passe au niveau ${this.level} !`);
    }

    healthCheck() {
        if (this.health <= 0) {
            this.health = 0;
            console.log(`${this.name} est mort !`);
        }
    }

    attack(enemy, isUltimate = false) {
        const damage = isUltimate ? this.attackPower * 5 : this.attackPower;
        enemy.health -= damage;
        const attackType = isUltimate ? "lance son attaque ultime sur" : "attaque";
        console.log(`${this.name} ${attackType} ${enemy.name} et lui inflige ${damage} points de dégâts`);
        this.levelUp();
        enemy.healthCheck();
    }
}

class Mage extends Character {
    constructor(name, race = 'mage', health = 170, attackPower = 90) {
        super(name, race, health, attackPower);
    }

    ultimate(enemy) {
        this.attack(enemy, true);
    }
}

class Warrior extends Character {
    constructor(name, race = 'Guerrier', health = 350, attackPower = 50) {
        super(name, race, health, attackPower);
    }

    ultimate(enemy) {
        this.attack(enemy, true);
    }
}

let saroumane = new Mage('Saroumane');
let aragorn = new Warrior('Aragorn');

aragorn.attack(saroumane);
console.log(saroumane);
console.log('<<<<<<<<<<<<<< Aragorn a tapé, Saroumane est enervé >>>>>>>>>>>>>>>>');
saroumane.ultimate(aragorn);
console.log(aragorn);
