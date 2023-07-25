/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input=document.getElementById("input")
let answer1=document.getElementById("answer1")
let answer2=document.getElementById("answer2")
let answer3=document.getElementById("answer3")

function convert(){
    let num=Number(input.value); 
    answer1.textContent=(num*3.281).toFixed(2)
    answer2.textContent=(num/3.785).toFixed(2)
    answer3.textContent=(num*2.205).toFixed(2)  
}