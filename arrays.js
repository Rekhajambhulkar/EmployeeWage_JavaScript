//Write a Program to show Sum of three Integer adds to ZERO

//Declare an array
let numbers=[1,2,3,4,5,6,7,-1,-2,-3,-4,-9];

for(let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
        for(let k=j+1;k<numbers.length;k++){
            if(numbers[i]+numbers[k]+numbers[j]==0){
                console.log(numbers[i]+","+numbers[j]+","+numbers[k]);
            }
        }
    }
}

/* 
1.Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.*/

  
//Find second largest number and second smallest with out sorting
let array=new Array();
//iterating the loop for getting 10 threeDigit random number

for(let i=0;i<10;i++){
    let randomNumber=Math.floor(Math.random()*900+100);
    array.push(randomNumber);
}
console.log(array)
let lengthArray=array.length;
console.log(lengthArray);

let largest1=0;
let largest2=0;
let smallest=array[0];
let smallest2=array[0];

for(let i=0;i<lengthArray;i++){
    if(array[i]>largest1){
        largest1=array[i];
    }
    if(array[i]<smallest){
        smallest=array[i];
    }
}
for(let j=0;j<lengthArray;j++){
    if(array[j]>largest2 && array[j]!=largest1){
        largest2=array[j];
    }if(array[j]<smallest2 && array[j]!=smallest){
        smallest2=array[j];
    }

}
console.log("First largest number is:"+largest1);
console.log("First smallest number is:"+smallest);
console.log("Second largest number:"+largest2);
console.log("Second smallest number:"+smallest2);


/*
2. Extend the above program to sort the array and then find the 2nd largest
and the 2nd smallest element.
*/

//Sorting an array
let array=new Array();
for(let i=0;i<10;i++){
    let randomNumber=Math.floor(Math.random()*900+100);
    array.push(randomNumber);
}
console.log("Array before sorting");
console.log(array);
array.sort();
console.log("Array after sorting");
console.log(array);
console.log("second Largest Number:"+array[8]);
console.log("second smallest number:"+array[1]);

/* Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
etc and store them in an array */

let array=new Array();

for(let number=11;number<=100;number++){
    let temp=number;
    let reverse=0;
    while(temp>0){
        let rem=temp%10;
        reverse=reverse*10+rem;
        temp=parseInt(temp/10);
    }
    if(reverse==number){
        array.push(number);
    }
}
console.log(array);

/* Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output. */

let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter your number ",function(number) {    
    //array declaration
let array=new Array();
for(let i=2;i<=number;i++){
    if(number%i==0){
        let isPrime=1;
        for(j=2;j<=i/2;j++){
            if(i%j==0){
                isPrime=0;
                break;
            }
        }
        if(isPrime==1){
            array.push(i);
        }
    }
}
console.log("Printing the prime factors of an number");
console.log(array);
process.exit();
});