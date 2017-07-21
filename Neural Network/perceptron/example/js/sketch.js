var points = [];
var brain;
var count=0;
var training;
function setup() {
  createCanvas(600,600);
  
  //Create a training instance
  training = new Training();
  
  //Add a result function to calculate the result of training input
  training.result(function(pt){
     if(pt[1]>=pt[0]){
		  return 1;
	   }else{
		  return -1;
	}
  });
  
  //Create Training Input Data
  for(var i=0;i<100;i++){
	points.push(new Point());
	training.generateData(points[i].asArray());
  }
  
  // Create a new Perceptron with 2 variables; bias input is always added automatically.
  brain = new Perceptron(2);
  
  //register a visualizer function
  brain.visualizer(function(point,output){
    if(output==1){
	  fill(255,0,0);
    }else{
	  fill(0,255,0)
    }
    ellipse(point.x,point.y,18,18);
	   
	stroke(0);
	strokeWeight(1);
	var weights = brain.getWeights();
	x1 = 0;
	y1 = (-weights[2] - weights[0]*x1)/weights[1];
	x2 = 600;
	y2 = (-weights[2] - weights[0]*x2)/weights[1];
	line(x1,y1,x2,y2);
  })
  
}

function draw() {
   //Initialize the screen
   background(255);
   
   //Draw actual separator line
   line(0,0,width,height);
   
   // Get the training data from training
   var training_data = training.getData();
   
   //Train the perceptron
   brain.train(training_data[count++],false); // Training slowing with one training data at a time.
   if(count==training_data.length) count=0;
   
   //Checking for each point
   points.forEach(function(point){
       var output = brain.guess(point.asArray()); //Guessing the input
	   brain.visualize(point,output); //Visualizing the guess
   });
   
}