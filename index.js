function dwarfRollCall(dwarves) {
var array = [];
for (var i= dwarves.length/2; i<dwarves.length; i++) {array.push((i+1)+`. `+dwarves[i]+` `)}
  return array.join("");
}


function summonCaptainPlanet(planeteerCalls){
  var arrayTwo= [];
  for (var i=0; i<planeteerCalls.length; i++) {arrayTwo.push(planeteerCalls[i].toUpperCase()+`!`)}
  return arrayTwo;
}

function longPlaneteerCalls(words) {
  for (var i=0; i<words.length; i++) {
   if (words[i].length> 4) 
 {return true}
  else
  {return false}
 }}

function findTheCheese (foods) {
  for (var i = 0; i<foods.length; i++) {
    if (foods[i] === "cheddar")
    return "cheddar";
    else if (foods[i] === "gouda")
    return "gouda";
    else if (foods[i]=== "camembert")
    return "camembert"}
    
    return "no cheese!";
//  
//   
  
}

function wordswithb(words) {
  var bWordsArray = []
  for (var i = 0; i<words.length; i++) {
    if (words[i].startsWith("b")) {bWordsArray.push(words[i])}

  }
  return bWordsArray
}
