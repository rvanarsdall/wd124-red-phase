// PROBLEM 2

function convertToDegreeCelcus(temps: number[]) {
  return temps.map((singleTemp) => Math.floor(((+singleTemp - 32) * 5) / 9));
}

const dailyTemps = [93, 78, 88];
console.log(convertToDegreeCelcus(dailyTemps));
