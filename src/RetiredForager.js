var RetiredForagerBee = function(treasureChest, food) {
	ForagerBee.call(this, treasureChest)
	Grub.call(this, food);

	this.age = 40;
	this.job = "gamble";
	this.color = "grey";
	this.canFly = false;
    // this.treasureChest = [];
};

 RetiredForagerBee.prototype = Object.create(Grub.prototype);// re-define child prototype to Parent prototype
 RetiredForagerBee.prototype.constructor = RetiredForagerBee;// return original constructor to Child


RetiredForagerBee.prototype.forage = function(treasure) {
    return "I am too old, let me play cards instead";
}

RetiredForagerBee.prototype.gamble = function(treasure) {
    this.treasureChest.push(treasure);
};

 // Create a RetiredForagerBee class, in pseudoclassical style, with:

 // call the ForagerBee superclass
 // set the prototype
 // set the constructor
 // an age property that is set to 40
 // a job property that is set to gamble
 // a canFly property that is set to false
 // a color property that is set to grey
 // a forage method that returns "I am too old, let me play cards instead"
 // a food property that is inherited from grub
 // an eat method that is inherited from grub
 // a treasureChest property inherited from ForagerBee that is set to an empty array []
 // an always winning gamble method that allows the bee to add a treasure to the treasureChest