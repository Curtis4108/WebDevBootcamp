/* function sing(repeater) {
    let i = 0;
    while (i < repeater) {
        console.log("do");
        console.log("re");
        console.log("mi");
        i++;
    }
}

function rant(message) {
    capitalised = message.toUpperCase();
    console.log(capitalised);
}

rant('I hate beets'); */

/* For each */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach(function (el) {
    console.log(el);
})

/* Map */
const doubles = numbers.map(function (num) {
    return num * 2;
})

/* Arrow functions - no Internet Explorer support*/
const add = function (x, y) {
    return x + y;
}

const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

const square = x => {
    return x * x;
}

/* For single return lines only */
const square = x => (
    x * x;
)

const square = x => x * x;

/* Arrow functions + map */

const doubles = numbers.map(function (num) {
    return num * 2;
})

const doubles = numbers.map(num) => {
    return num * 2;
}

const doubles = numbers.map(num) => num * 2;

/* Set timeout, waits 3000 ms to run function */
setTimeout(() => {
    console.log("Hello!")
}, 3000)

/* Set Interval, repeats every 2000 ms */
const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

/* Stop setInterval by running clearInterval */
clearInterval(id)

/* Filter method */
numbers.filter(n => {
    return n < 10
})

/* Filter + map chained together */
numbers.filter(n => n < 10).map(n => n * 2)

/* Some and Every */
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75) //returns true if all meet condition//
exams.some(score => score > 90) //returns true if at least one element meets condition//

/* Reduce Method */
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

const total = prices.reduce((total, price) => {
    return total + price;
})

const total = prices.reduce((product, price) => product * price)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})