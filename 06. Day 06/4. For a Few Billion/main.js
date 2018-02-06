var sum = 0.01;
function tenGrand (){
  for(var i = 2; i <= 30; i++){
    sum*=2;
      console.log("I'm counting sum is " +sum);
  }
  console.log("The reward after 30 days was " + sum);
}
tenGrand();
