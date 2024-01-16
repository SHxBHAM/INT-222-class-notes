function example(){
    if(true){
        var a = "shubham";
    }
    console.log(a);// this shouldnt be possible in the case of let and const
}
example()
//console.log(a); // throws an error because var is function scoped
// a const is immutable ie cant be changed .
const a =10;
//a=8;// re assigning is not possible in the case of const
console.log(a)