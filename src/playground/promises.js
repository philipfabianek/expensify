const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "Philip",
            age: 16
        });
        // reject("Something went wrong :(");
    }, 1500);
});

console.log("before");

promise.then((data) => {
    console.log("1", data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is my other promise");
        }, 1500);
    });
}).then((string) => {
    console.log("does this run?", string);
}).catch((error) => {
    console.log(error);
});

console.log("after");
