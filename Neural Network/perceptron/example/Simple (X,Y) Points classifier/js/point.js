function Point(){
    this.x = random(0,width);
	this.y = random(0,height);
	this.z = 1;
}

Point.prototype.asArray = function(){
   return [this.x,this.y,this.z];
}