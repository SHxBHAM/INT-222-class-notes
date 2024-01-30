console.log("START OF THE PROGRAM");
setTimeout(() => {
    console.log("this printed after 2s");
}, 2000);
console.log("THIS IS AFTER THE SETTIMEOUT");// printed first because settimeout is an async function out of the box.
