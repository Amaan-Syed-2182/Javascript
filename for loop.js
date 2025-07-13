// Program to Print num from from 1 to 5
console.log("Program for 1 to n Number printing");
num = prompt("Enter the Number: ");
num = parseInt(num);
for(let i=1;i<=num;i++){
    console.log(i)
}

console.log("Program to Print Factorial of n: ");
n = prompt("Enter the Number of Factorial: ");
fact = 1
n = parseInt(n);
for(let i=1;i<=n;i++){
    fact *= i;
}
console.log("Factorial of "+ n +" is: "+fact);

console.log("Program to Demostrate For in Loop");
let obj={
    "Amaan":94,
    "Raj":88,
    "Aryan":77,
    "Ashish":67,
    "Ankit":54
}
for(let i in obj){
    console.log("Marks of"+ i +"are: "+obj[i]);
}

console.log("Program to Demostrate For of Loop")
str = "Amaan"
for(let i of str){
    console.log(i)
}
