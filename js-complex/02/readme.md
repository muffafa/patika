# Fonksiyonlar, Declaration vs Expression, IIFE, First-Class Fonksiyonlar

[<< Anasayfa](../readme.md)

## 🔗 Ders Videosu

[JavaScript Karmaşası : 02 : Fonksiyonlar, Declaration vs Expression, IIFE, First-Class Fonksiyonlar](https://youtu.be/KO8aZFwtVwY)

## 🧮 Function Declaration

`Function declaration` ya da `function statement` ile fonksiyonlar tanımlanır.

```javascript
function square(x) {
    return (x * x)
}

// function invoked with => ()
console.log(square(5)) // 25
console.log(square) // [Function: square]
```

JavaScript'te fonksiyonlar da `hoisting` edilir.

```javascript
console.log(square(5)) //25

function square(x) {
    return (x * x)
}
```

Yukaradaki örneklerde x yani fonksiyon yazılırken kullanılan değişkenlere `parametre`, fonksiyon çağırılırken kullanılan değerlere yani öreneğin 5 e `argüman` denir.

## 🙎🏻 Function Expression

Bir fonksiyon aynı zamanda bir değişkene atanabilir. Buna `function expression` denir.

```javascript
const square = function square(x) {
    return (x * x)
}

// function invoked with => ()
console.log(square()) // NaN
console.log(square(5)) // 25
console.log(square) // [Function: square]
```

Fonksiyon ismi opsiyoneldir.

```javascript
const square = function (x) {
    return (x * x)
}


console.log(square(10)) // 100
```

Function expressionlar hoisted değldir.

```javascript
// const
console.log(square(5)) // ❌ ReferenceError: square is not defined

const square = function (x) {
    return (x * x)
}
```

```javascript
// var
console.log(cube(10)) // ❌ TypeError: cube is not a function

var cube = function (x) {
    return (x * x * x)
}
```

```javascript
// var
console.log(cube) // undefined

var cube = function (x) {
    return (x * x * x)
}
```

## 💻 First Class Functions

JavaScript'te function expression olarak tanımlanan fonksiyonlar `first class function` dır. Bunlara diğer değişkenler gibi davranabiliriz.

```javascript
const myArray = [6 , "Muffafa", function() {console.log("Array Element")}]

myArray[2](); // Array Element
```

```javascript
const myObject = {
    name: "Muhammed Mustafa",
    age: 22,
    func: function() { console.log("Object Element")}
}

console.log(myObject.func()) // Object Element
```

Aşağıdaki örnek bir `IIFE (Immediately Invoked Function Expression)` örneğidir.

```javascript
console.log(10 + (function(){ return 10 })()) // 20
```

Ayrıca bir fonksiyonu başka bir fonsiyona argüman olarak gönderebiliriz.

```javascript
const addFive = function(num, func) {
    console.log(num + func())
}

addFive(10, function(){ return 5 } ) // 15
```

Fonksiyon dönüş değerine başka bir fonksiyon yazabiliriz.

```javascript
const myFunc = function (num) {
    return function toDouble() {
        console.log(num * 2)
    }
}

console.log(myFunc) // [Function: myFunc]
console.log(myFunc()) // [Function: toDouble]

myFunc()() // NaN
myFunc(8)() // 16
myFunc()(8) // NaN

const result = myFunc(7)
console.log(result) // [Function: result]
result() // 14
```

## 🏎️ IIFE

Aşağıdaki örnek bir `IIFE (Immediately Invoked Function Expression)` örneğidir.

```javascript
const sum = function(){
    console.log(5+12) //17
}() 

console.log(sum) // ⚠️ undefined: bacause function declareted and invoked immediately
```

```javascript
function(){
    console.log(5+12)
}() // ❌ SyntaxError: Function statements require a function name
// JavaScript engine thinks it is a function statement because it saw function keyword first
```

```javascript
(function(){
    console.log(5+12)
})() // 17
```

<br>

> ⚠️ JavaScript'te hemen hemen her şey gibi fonksiyonlar da birer nesnedir!
>
> ```javascript
> function multiply(num1, num2){
>    return (num1 * num2)
> }
>
> console.log(multiply.name) // multiply
> console.log(multiply.length) // 2: length represents number of parameters
> ```
>

[<< Ders 1](../01/readme.md)