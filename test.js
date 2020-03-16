function sum(a, b) {
    return a + b
}
(function () {
<<<<<<< Updated upstream
    console.log(`summa 2+3= ${sum(2, 3)}`})()
=======
    alert(`summa 2+3= ${sum(2, 3)}`)
})()

function print(message) {
    console.log('message')
}

let sum = (function () {
    return (a, b) => a + b;
})()
>>>>>>> Stashed changes
