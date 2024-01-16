let Shadowedvar = "I am global" // in var and let there is no difference in the output of this code 

function exampleFunction(){
    let Shadowedvar = "I am local"; // actually this variable doesnt have any connection to the global scoped variable
    console.log(Shadowedvar);
}
exampleFunction();
console.log(Shadowedvar);
// let doesnt allow re declaring of the variable in the same scope but var does.
