
// function declaratiom

// function one() {
//     console.log('one')
    
// }
// one(); //calling a functiom

// //function expression
// const two = ()=>{
//     console.log('two')
// }

// two();

// 

function triangleArea(base, height) {
    let area = (base * height)/2;
    console.log(`Triangle area is: ${area}`);
}

triangleArea(2,5);


const radius = 10;
const pi = Math.PI;
const areaOfCircle = (radius, pi) => {
   return pi * radius * radius;
};
console.log("The area of the circle is: " + areaOfCircle(radius, pi));