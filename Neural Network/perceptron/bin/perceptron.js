/*
   Author: Nadir Laskar

   This class is an implementation of perceptron.   
*/

// arg: inputs << How many inputs perceptron accepts?

function Perceptron(inputs){
    
	inputs=inputs+1; //One bias is always there as input.
    
	this.inputs=[];
	this.weights=[];

	this.learning_constant = 0.0001; // learning constant
	for(var i=0;i<inputs;i++){
	   this.weights[i] = random(-1,1); //Setting initial weight of the input
	}
};


// Activate function that takes the 
// sum = x1w1+x2*w2+x3*w3

Perceptron.prototype.activate = function (sum){
	if (sum > 0) return 1;
    else return -1; 
}

// Guess function is used to call the the activate function 
// after calcuating the sum (x1w1+x2*w2+x3*w3)
//
// arg: inputs << Input set for guess of output

Perceptron.prototype.guess = function (inputs){
   	this.inputs = inputs;
    var sum = 0;
	 
	this.inputs.forEach(function(input,id){
	     sum += (input*this.weights[id]); 
	}.bind(this));

	
	return this.activate(sum);
}

// Train method trains the perceptron
// by changing the weights of the inputs 
// arg: data is a data set used to train.
// arg: collection describes if the data is collection or single data

Perceptron.prototype.train = function (data,collection=true){
    if(collection){
      data.forEach(function(_data){
	     this.train(_data,false);
	  }.bind(this));
	}
    else {
		var inputs =  data.input;
		var output = brain.guess(inputs);
		
		var error = data.result - output;
		
		for (var i = 0; i < this.weights.length; i++) {
		  this.weights[i] += this.learning_constant * error * inputs[i]; 
		}
	}
}

// Return weights of the current perceptron

Perceptron.prototype.getWeights = function (){
   return this.weights;
}

// Adds visualizer to the perceptron

Perceptron.prototype.visualizer = function(fn){
   this.visualize = fn;
}
