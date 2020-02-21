# What are higher-order functions? What are they useful for? Write one, in your preferred language.

### To put it breify higher-order functions just regular functions that either take a function as its parameter/ as one of its parameter or return a function.
### We use higher order functions to make our code more modular. We can break down complex functions into smaller functions that are only resposible for a paticular action. This makes our code much more eaiser to read and debug.
```
function plusTen(n) {
    return n + 10
}

function higherOrderFunction(array, callback) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
        return newArray
}

higherOrderFunction([1,34,4],plusTen) // [11, 44, 14]
```