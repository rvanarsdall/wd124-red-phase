let number1
let name1

number1 = 4

number1 = "4"
let stringExample: string = "This is a string"
let numberExample: number
let isColdOutside: boolean

isColdOutside = true
// isColdOutside = "true"
stringExample = "Tree"

stringExample = "5"

numberExample = 5
// numberExample = "10"

let restaurant ={
    name: "McDonalds",
    dineInOpen: true,
    foodItems: ["hamburger", "fries", "apple pie"]
}

console.log(restaurant.dineInOpen)

restaurant.foodItems.map(food=> console.log(food))

let stringOrNumber : string | number

stringOrNumber = "5"
stringOrNumber = 4


function buySellStock(stockName:string, qty:number, action: "buy-stock" | "sell-stock"){
 let total = qty * 15
 let status = action === "sell-stock" ? "sold" : "bought"

    return `You just ${status} ${qty} of ${stockName} for a total of ${total}`

}

console.log(buySellStock("APPL", 5, "sell-stock"))

interface IWeather {
    temp: number,
    cloudCondition: string,
    next5DayTemps: number[],
    wind?:string
}


let weather: IWeather = {
    temp: 40,
    cloudCondition:"Overcast",
    next5DayTemps: [45,23,15]
}


let anyExample: any;

anyExample = "Test"


function subtractValues(num1: number, num2: number):void{

}