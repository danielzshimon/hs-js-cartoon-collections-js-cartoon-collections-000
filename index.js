function dwarfRollCall(dwarves) {
  var string = [];
  for (var i = dwarves.length/2; i < dwarves.length; i++){
   string.push((i+1)+". "+ dwarves[i]+" ");   
  }
  return string.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var finalArray = [];
    for (var i = 0; i < planeteerCalls.length; i++){
      finalArray.push(planeteerCalls[i].toUpperCase()+"!");
  }
  return finalArray;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
    }else{
      return false;
    }
  }
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert", "swiss"];
  for (var i = 0; i < foods.length; i++){
    for (var j = 0; j < cheese.length; j++){
      if (foods[i] === cheese[j]){
        return foods[i];
      }
    }
  }
  return "no cheese!";
}

function wordWithB(array){
  var bWords = [];
  for (var i = 0; i < array.length; i++){
    if(array[i].startsWith("b")){
      bWords.push(array[i]);
  }
 return bWords; 
}





