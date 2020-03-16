function sum(a, b) {
    return a + b
}
(function () {
    console.log(`summa 2+3= ${sum(2, 3)}`})()
alert(`summa 2+3= ${sum(2, 3)}`)
}) ()

function alertAll() {
    console.log('message')
}

let test = (function () {
    return (a, b) => a + b;
})()
