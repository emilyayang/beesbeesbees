var Bee = function(food) {
	Grub.call(this, food);
	this.age = 5;
	this.color = "yellow";
	this.job = "keep on growing";
};


 Bee.prototype = Object.create(Grub.prototype);// re-define child prototype to Parent prototype
 Bee.prototype.constructor = Bee;// return original constructor to Child

 // call the Grub superclass
 // set the prototype
 // set the constructor
 // an age property that is set to 5
 // a color property that is set to yellow
 // a food property that is inherited from grub
 // an eat method that is inherited from grub
 // a job property that is set to keep on growing

