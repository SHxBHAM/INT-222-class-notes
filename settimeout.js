console.log("START OF THE PROGRAM");
setTimeout(() => {
    console.log("this printed after 2s");
}, 2000);
console.log("THIS IS AFTER THE SETTIMEOUT");// printed first because settimeout is an async function out of the box.

// -----------------------------------SET INTERVAL & CLEAR INTERVAL---------------------------------------------------------------------------
function repeater(){
    console.log("executing repeater");
}
const lmao = setInterval(repeater, 2000);
setTimeout(() => {
    clearInterval(lmao);
    console.log("stopped");
}, 20000);