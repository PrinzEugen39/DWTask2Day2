//synchronized

console.log("mulai");

function processSync() {
    for(let i = 1; i <= 5; i++) {
        console.log(`langkah ${i}`);
    }
}

processSync();

console.log("end");
console.log("______________________________________________________________");

//asynchronous

console.log("Mulai async");

function processAsync(iterasi, callback) {
    setTimeout(()=> {
        console.log(`Langkah ${iterasi}`);
        callback;
    }, 1000) 
}

processAsync();

function end() {
    console.log("end");
}

for(let i = 1; i <= 5; i++) {
    processAsync(0, () => {
        if (i === 4){
            end()
        }
    })
}