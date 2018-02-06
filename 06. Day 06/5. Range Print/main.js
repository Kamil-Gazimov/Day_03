var range = [2, 10, 2];

function printRange(){
  for(var i = range[0]; i < range[1]; i = i + range[2]){
    console.log(i);
  }
}
printRange();