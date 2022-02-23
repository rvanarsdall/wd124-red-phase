// create 3 variable  button, input1 , input2
// use getElementById method to store the "btn", "number1", "number2"

let input1 = document.getElementById("number1") as HTMLInputElement
let input2 = document.getElementById("number2") as HTMLInputElement

let button = document.getElementById("btn") as HTMLButtonElement
// Add eventlistner to button that will just do call a function handleClick.

button.addEventListener("click", ()=>{
   handleCLick()
})
// make a function called addNumbers that takes two parameters (num1, num2)
function addNumbers(num1:number, num2:number):number{
    return +num1 + +num2
}
// the function addNumbers should return num1+num2

function handleCLick(){
    console.log(addNumbers(+input1.value, +input2.value))
}
// inside function handleClick call the addNumbers function and console log the result comingback from addNumbers
