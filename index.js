// code your solution here
//Define a Function Using Function Declaration

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("roller-skate"));



const mondayWork = function (mondayActivity ="go to the office"){
    return `This Monday, I will ${mondayActivity}.`

}
console.log(mondayWork());
console.log(mondayWork("work from home"))

function wrapAdjective(character = "*"){
    return function secondFunction(adjective  = "special") {
    return `You are ${character}${adjective}${character}!`;}
}
console.log(wrapAdjective('*'))