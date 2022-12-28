let person={
    firstname:"john",
    lastname:"kenedy",
    age:50,
    weight:60
}

//accessing object property
console.log(person["firstname"])//john
console.log(person.age);//50

//add new property

person["height"]=5.5;//5.5
console.log(person["height"]);

// //Update existing property
person["weight"]=65;
console.log(person["weight"]);//65

//Remove the property from object
delete person["age"];
console.log(person["age"]);//undefined

 console.log("*******looping object*******");
//for/in loop
for(let x in person){
//    console.log(x);// print only property name
//    console.log(person[x]);//print only value of property
//  }

console.log(x+" :  "+person[x]);//print property name and value also

}