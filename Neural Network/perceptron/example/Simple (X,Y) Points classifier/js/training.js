/*
   Author: Nadir Laskar

   This class is an implementation of trainer,
   which is used to generate training data for the perceptron.   
*/

function Training(){
    this.inputs=[];
	this.fn=function(x){return x;};
	this.data = [];
}

// arg: fn << It takes a fn as an argument.
// which describes how to calclulate the result of input data.

Training.prototype.result = function(fn){
    this.fn = fn;
}

// Takes inputs as argument and generates data for training.

Training.prototype.generateData = function(inputs=this.inputs){
    this.inputs=inputs;
	this.data.push({'input':inputs,'result':this.fn(inputs)})
}

// It returns generated data as output
// Output structure of generated data is 
//
// { "input": INPUT , "result": RESULT}

Training.prototype.getData = function(){
    return this.data;
}
