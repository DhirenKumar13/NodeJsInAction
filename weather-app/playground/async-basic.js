console.log('Starting Application');

setTimeout(() => {
    console.log("Timed out for 2000ms ....");
},2000);

setTimeout(() => {
    console.log("Timed out for 0ms ....");
},0);

setTimeout(() => {
    console.log("Timed out for 500ms ....");
},500);

setTimeout(() => {
    console.log("Timed out for 1000ms ....");
},1000);

setTimeout(() => {
    console.log("Timed out for 1500ms ....");
},1500);

console.log('Finishing Application');

console.log(".... DONE ....");