var ForagerBee = function(age,job,canFly,treasureChest) {
    Bee.call(this,age,job)

    this.age=10
    this.job = "find pollen"
    this.canFly = true
    this.treasureChest = []

};

ForagerBee.prototype = Object.create(Grub.prototype)
ForagerBee.prototype.constructor = ForagerBee

ForagerBee.prototype.forage = function (treasure){
this.treasureChest.push(treasure)
}

