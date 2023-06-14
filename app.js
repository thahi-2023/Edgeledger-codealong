// //use array inside an object

// const adventure ={
//     name: "Thahira",
//     hitPoint:10,
//     belongings:["staff","potions","medicine"],
//     companion:{
//         name:"rocky",
//         type:"cat",
//         belongings:["ball of yarn"," healing pad","healthinsurance"]
//     }
// }
// //access the value in 

// console.log(adventure.belongings);
//  //console.log(adventure.companion)
//  console.log(`one of my companion belongings is ${adventure.companion.belongings[2]}`);
// //access the values in the array

// console.log(`first belongig: ${adventure.belongings[0]}`);
// //iterate ober an array of an object
// for (let i =0; i <adventure.belongings.length; i++){
//     console.log(adventure.belongings[i]);

// }
// //#1 

const movies =[
    {
        title:"tokyo story"
    },
    {
        title:"paul blart: mall cop" 
    }
];
console.log(movies[0].title);


for(let i=0; i <movies.length;i++){
    console.log(movies[i].title);
}

//combine object, array,function
const foo ={
    arr:[1.2,3],
    obj: {
        prop:'object property'
    },
    dosomething: ()=> {
        console.log("I did something")
    }
}
console.log(foo.arr[0]);
console.log(foo.obj.prop);
foo.dosomething()


//an arraay of arrays

const food =[
    [1,2,3],
    ["4","5","6"],
    [7,8,9],
    ()=> {
        console.log("I am a function inside an array");
    }
]
console.log(food[0]);
console.log(food[0][1]);

console.log(food[3]());


// // class creating

class Character {
    
 greet (){
    console.log(`hello ${ otherCharacter}`);
 }
}

    const alex = new Character();
    const brock =  new Character();

    // me.greet();
    // you.greet();


alex.greet(" Brock");

brock.greet("Alexander");