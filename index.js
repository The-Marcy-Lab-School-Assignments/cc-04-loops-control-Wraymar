//Write your solutions in this file, don't forget to test your functions.
//Q1

const countFromOne = (num) => {
    let i = 1
    while(i <= num) {
        console.log(i)
        i++
    }
}

//countFromOne(10)

//Q2
const countEveryOdd = (num) => {
    for(let i = 1; i <= num; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}

//countEveryOdd(10)

//Q3
const isNegative = (num) => {
    if(num < 0){
        return true
    }else{
        return false
    }
}

//console.log(isNegative(2))

//Q4
const betweenFiveAndTwenty = (num) => {
    if(num > 5 && num < 20){
        return true
    }else{
        return false
    }
}

//console.log(betweenFiveAndTwenty(4))

//Q5
const sumOfThreeAndFive = () => {
    let sumOfMultiples = 0
    for(let i = 1; i < 1000; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sumOfMultiples += i
        }
    }
    console.log(sumOfMultiples)
}

//sumOfThreeAndFive()

//Q6
const isAllLowerCase = (str) => {
    return str !== str.toUpperCase()
}
console.log(isAllLowerCase("hello")) //returns true)
console.log(isAllLowerCase("seven eleven")) //returns true)
console.log(isAllLowerCase("Seven eleven has the best slushies")) //returns false)

//Q7 Bonus
const multiplesOfFive = (arr) => {
    let totalMultiplesOfFive = 0
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] % 5 === 0){
            totalMultiplesOfFive ++
        }
    }
    console.log(totalMultiplesOfFive)
}

//multiplesOfFive([1,2,3,4,5,6,7,8,9,10])

