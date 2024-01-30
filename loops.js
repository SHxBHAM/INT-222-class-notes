for(let i = 0;i<5;i++){
    console.log(i);
}
let manna = "gay";
let count = 0;
let try1 = {
    name: "this object has a function",
    func: function(){
        console.log("ram ram laddar");
    }
    
};
while(manna == "gay"){
    console.log("Manna is GAY.");
    count++;
    if(count>=5){
        console.log("Manna is five times the gay anyone could ever be.")
        break;
    }
}

let person ={
    name: "Soumya manna",
    age: 19,
    occupation: "gay rights activist"
};
let person2 ={
    name: "Shubham",
    age: 19,
    occupation: "gay rights activist hater."
};
// there could be a funtion inside an object
try1.func();

// constructor function
function HoodNigga(gangname,gang,choiceofWeapon){
    this.gangname = gangname;
    this.gang = gang;
    this.choiceofWeapon = choiceofWeapon;
}

let nigga1 = new HoodNigga("6lock Ni9e","crip","blicky44");
let nigga2 = new HoodNigga("Booby Bengal","blood","9fish");
let nigga3 = new HoodNigga("capper cash-miri","crip","crack99");

console.log(nigga3.choiceofWeapon);