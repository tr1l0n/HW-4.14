// 1
let promises = [];
const delayedPromise = (text, delay) => {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(text);
        }, delay)
    });
    promises.push(promise);
}
delayedPromise(1, 1000);
delayedPromise(2, 2000);
delayedPromise(3, 2500);
delayedPromise(4, 1500);
delayedPromise(5, 3000);
Promise.all(promises).then(value => console.log(value));


// 2
let randomPromises = [];
const randomDelay = (text) => {
    let delay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(text);
        }, delay);
    });
    randomPromises.push(promise);
}
randomDelay(1);
randomDelay(2);
randomDelay(3);
randomDelay(4);
randomDelay(5);
Promise.race(randomPromises).then(value => console.log(value));