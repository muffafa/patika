# var, let, const karmaşası

[<< Anasayfa](../readme.md)

## 🔗 Ders Videosu

[JavaScript Karmaşası : 01 : Const vs Let vs Var, Hoisting Nedir?, "Değiştirmek" vs "Atamak"](https://youtu.be/GFyELl7fdmU)

## 😜 let

`Blockscope` ve değişebilen değişkenler için kullanılır

``` javascript
let age = 22
console.log("Your age is ", age) // 22

age = 23
console.log("Your age is ", age) // 23
```

``` javascript
let age; // declearation without inital value is valid
console.log("Your age is ", age) // Your age is undefined

age = 22
console.log("Your age is ", age) // Your age is 22
```

Özel olarak değişmesini istediğimiz ifadeler için `let` kullanılır.

``` javascript
let str = "";

for(let i = 0; i < 10; i++){
    str = str.concat(i.toString());
    console.log(str);
}
```

Blockscope özelliği;

``` javascript
let age = 22
console.log("Your age is ", age) //22

age = 23
console.log("Your age is ", age) //23

if (age > 18){
    console.log("Your age is above 18")
    let age = 18 
    console.log("New age is ", age) //18
}

console.log("Your current age is ", age) //23
```

Global olmaması;

``` javascript
let x = 5
console.log(window.x) // undefined
```

## 💪🏻 const

Genellikle değişmeyen değişkenler için kullanılır. `Initial value` alır.

``` javascript
const name = "Muhammed Mustafa"
console.log("Your name is ", name) // Your name is Muhammed Mustafa

name = "Muffafa"
console.log("Your name is ", name) // gives error message ❌
```

``` javascript
const name; // declearation without inital value is not valid ❌

name = "Muhammed Mustafa"
console.log("Your name is ", name)
```

Aşağıdaki örnekler `nesne` olduğu, yani velue type değil `reffernce type` olduğu için güncellenebilir ama yeniden atama yapılamaz.

``` javascript
const myArray = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7]
console.log(myArray) // 0, 1, 2, 3, 4, 5, 6, 7

myArray.pop() // 7
console.log(myArray) // 0, 1, 2, 3, 4, 5, 6
```

``` javascript
const student = {
    name: "Muhammed Mustafa",
    age: 22
}
console.log(student)

student.name = "Muffafa"
console.log(student) // student.name => "Muffafa"
```

``` javascript
const student = {
    name: "Muhammed Mustafa",
    age: 22
}
console.log(student)

// it throws an error because you cannot asign new refference to it ❌
student = { 
    name: "Muffafa",
    age: 23
}
console.log(student)
```

Değişmesini istemediğimiz nesneler için `freeze()` methodunu kullanabiliriz.

``` javascript
const student = {
    name: "Muhammed Mustafa",
    age: 22
}
console.log(student)

Object.freeze(student)

student.name = "Muffafa" // it does not throw an error but value is not changed
console.log(student) // student.name => "Muhammed Mustafa"
```

Global olmaması;

``` javascript
const x = 5
console.log(window.x) // undefined
```

## 😰 var

`Functional scope` ve `global scope` olarak çalışır.

``` javascript
var age = 22
console.log("Your age is ", age) // 22

age = 23
console.log("Your age is ", age) // 23

if (age > 18){
    console.log("Your age is above 18")
    var age = 18 
    console.log("New age is ", age) // 18
}

console.log("Your current age is ", age) // 18
```

``` javascript
var x = 5
console.log(window.x) // 5 becuse it is a global variable 
```

## 🤯 Hoisting

JavaScript kodu okumaya başladığı anda `var` değişkenlerin tamamını alıp değerlerine bakmadan hoisting (yükseltme) yaparak onları tanımlar. (Bir nevi tanımlmaları en önce yapar)

``` javascript
var x = 5
console.log(x) // 5
```

``` javascript
console.log(x) // throws exception reffernce error ❌
```

``` javascript
var x;
console.log(x) // undefined
```

``` javascript
console.log(x) // undefined
// var x
var x = 5 
console.log(x) // 5
```

[<< Anasayfa](../readme.md) | [Ders 2 >>](../02/readme.md)
