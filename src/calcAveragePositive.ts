/*
Write a function which takes an array of numbers and returns the two separate averages of negative numbers and positive numbers found in the array.

Return the averages as two elements of an array, or, if you know objects, as properties `averageOfPositives` and `averageOfNegatives`

Use the value `null` to indicate when an average is not possible - e.g. when there are no positive numbers.

Zero values are not positive or negative. You should exclude them from your calculations.
### Example:

calcAveragesNegativeAndPositive([10, -100, 20, -200, -3])
should return either the array

[15, -101]

*/

/* use for loop to iterate through each number
if number is bigger than zero, it will go into positive array
if number is smaller than zero it will go into negative array
Positive Numbers Array = [10,20]
Negative Numbers Array = [-100,-200,-3]

create new variable totalPosNum = 0
create new variable totalNegNum = 0

for each num in posArray add num to totalPosNum
for each num in NegArray add num to totalNegNum
 

average positive =  totalPosNum / posArray.length
average negative =  totalNegNum / negArray.length

outputArray = [average positive,average negative]


*/
/**
 * 
 * @param inputArray array of negative and positive numbers
 * @returns an array with average for positive number and average for negative number 
 */
function calcAveragesNegativeAndPositive(inputArray:number[]){
    let posArray = [];
    let negArray = [];

for (const num of inputArray ){
    if (num > 0){
        posArray.push(num);
    } else{
        negArray.push(num);
    }
    let totalPosNum = 0;
    let totalNegNum = 0;


for(const posNumber of posArray){
   totalPosNum += posNumber;
}

for(const negNumber of negArray){
    totalNegNum += negNumber;
 }

const averagePos = totalPosNum/posArray.length;
const averageNeg = totalNegNum/negArray.length;

const outputArray = [averagePos,averageNeg];

return outputArray;
    
}
}
console.log(calcAveragesNegativeAndPositive([10, -100, 20, -200, -3]));
