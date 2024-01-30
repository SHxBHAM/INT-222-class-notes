function papafunc(name,callback){
    callback();
    console.log("hey"+name);
}
function betafunc() {
    console.log("mera bulawa aaya tha ji");
}

papafunc("shubham",betafunc)
