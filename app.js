//chalange: 1

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedfoods = foods.slice(1,4);
console.log("ModifiedFoods:",modifiedfoods);

//chalange: 2

var spfood = foods.splice(2,0,"noodles","icecream");
console.log("splicedFoods:", foods);

// challenge: 3

const numberArray = [12,324,213,4,2,3,45,4234];
var isEven = numberArray.filter(num => {
    if(num%2==0){
        return num;
    }
});
console.log("Even Numbers are:",isEven);

var isprime = numberArray.filter(num => {
    if(num%2==0){
        num = false;
    }
    else{
        return num;
    }
});
console.log("Prime Numbers are:", isprime);

// challenge: 4

var nonprime = numberArray.filter(num => {
    if(num%2==0){
        return num;
    }
});
console.log("NonPrime numbers are:",nonprime);

// challenge: 5

var isEven2 = numberArray.filter(num => {
    if(num%2==0)return num;
});
console.log("IsEven2", isEven2);

// challenge: 6

const myArray = [11,34,20,5,53,16];
var findSquareOfNumbers = myArray.map(x=>x**2);
console.log("Square:",findSquareOfNumbers);

// challenge: 7

const array = [2,3,5,10];
var multiply = array.map(x=>{
   var multiply1 = array.reduce((acc,curr)=>{
        return acc*curr;
    });
    return multiply1;
});
console.log("Multiply:",multiply);

