# Object Part I, this, Constructor Function, new Object(), create

[<< Anasayfa](../readme.md)

## 🔗 Ders Videosu

[JavaScript Karmaşası : 03 : Object Part I, this, Constructor Function, new Object(), create](https://youtu.be/e1jKtF5cbAk)

## 🔐 Object

`Object` yani türkesiyle `nesne` dediğimiz yapı _isim_ ve _değer_ çiftlerinden oluşmaktadır.

Nesnenin özelliklerine (değişkenlerine) `property` denirken fonksiyonlarına `method` denir.

Bir başka tanım ile nesne, collections of properties (özelliklerin koleksiyonudur).

```javascript
const person = {
    name: "Muhammed Mustafa",
    surname: "Savar",
    age: 22,
    languages: ["Turkish", "English", "French"],
    fullName: function() {
        return this.name + " " + this.surname
    },
    address: {
        city: "Antalya",
        district: "Kepez"
    }
}
```

## 💈 Object Literal

`Object Literal` yöntemi ile nesne oluşturken `initial valuelar` girilir.

```javascript
const person = {
    name: "Muhammed Mustafa",
    surname: "Savar",
    age: 40,
    languages: ["Turkish", "English", "French"],
    fullName: function() {
        return this.name + " " + this.surname
    }
}

console.log(person) // {name: 'Muhammed Mustafa', surname: 'Savar', age: 40, languages: Array(3), fullName: ƒ}
```

## · Dot Notation

``` javascript
const student = {
    name: "Muhammed Mustafa",
    surname: "Savar",
    studentNumber: 2020555403,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

console.log(student.name) // Muhammed Mustafa
console.log(student.studentNumber) // 2020555403

console.log(student.fullName) // [Function: fullName]
console.log(student.fullName()) // Muhammed Mustafa Savar

student.major = "Computer Engineering"
console.log(student.major) // Computer Engineering
```

```javascript
const person = {
    name: "Muhammed Mustafa",
    surname: "Savar",
    age: 22,
}

person.address = {}

console.log(person) // { name: 'Muhammed Mustafa', surname: 'Savar', age: 22, address: {} }

person.address.city = "Antalya"
person.address.district = "Kepez"

console.log(person.address) // { city: 'Antalya', district: 'Kepez' }
console.log(person) // { name: 'Muhammed Mustafa', surname: 'Savar', age: 22, address: { city: 'Antalya', district: 'Kepez' } }
```

## Bracket Notation

```javascript
const student = {
    name: "Muhammed Mustafa",
    surname: "Savar",
    studentNumber: 2020555403,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

console.log(student["name"]) // Muhammed Mustafa
console.log(student["studentNumber"]) // 2020555403

console.log(student["fullName"]) // [Function: fullName]
console.log(student["fullName"]()) // Muhammed Mustafa Savar

console.log(student["na" + "me"]) // ⚠️ Muhammed Mustafa: "na" + "me" => "name"
```

## 🛠️ Cunstructor

`Cunstructor` yani türkçesiyle `yapıcı fonksiyon` yardımıyla da nesneler oluşturabiliriz.

```javascript
function Person(name, surname, age) {
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function() {
        return obj.name + " " + obj.surname
    }

    return obj;
}

const person1 = new Person("Muhammed Mustafa", "Savar", 22);
console.log(person1) // Person { name: 'Muhammed Mustafa', surname: 'Savar', age: 22, fullName: [Function (anonymous)] }
console.log(person1.fullName()); // Muhammed Mustafa Savar

const person2 = new Person("Arda", "Güler", 17);
console.log(person2) // Person { name: 'Arda', surname: 'Güler', age: 17, fullName: [Function (anonymous)] }
console.log(person2.fullName()); // Arda Güler
```

Aynı zamanda `this` keyword ile oluşturulabilir.

```javascript
function Person(name, surname, age) {
    console.log(this) // Person {}

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function() {
        return this.name + " " + this.surname
    }

    console.log(this)
} 

const person1 = new Person("Muhammed Mustafa", "Savar", 22);
console.log(person1) // Person { name: 'Muhammed Mustafa', surname: 'Savar', age: 22, fullName: [Function (anonymous)] }
console.log(person1.fullName()); // Muhammed Mustafa Savar

const person2 = new Person("Arda", "Güler", 17);
console.log(person2) // Person { name: 'Arda', surname: 'Güler', age: 17, fullName: [Function (anonymous)] }
console.log(person2.fullName()); // Arda Güler
```

## 🫡 Object Constructor

```javascript
const person1 = new Object();
person1.name = 'John';
person1.surname = 'Doe';
person1.fullName = function() {
    console.log(this); // { name: 'John', surname: 'Doe', fullName: [Function (anonymous)], age: 40 }
    return this.name + " " + this.surname;
}
person1.age = 40;

console.log(person1); // { name: 'John', surname: 'Doe', fullName: [Function (anonymous)], age: 40 }
console.log(person1.age); // 40
console.log(person1.fullName()) // John Doe

```

## 😴 Object.create()

```javascript
const person = {
    name: 'Arda',
    surname: 'Güler',
    age: 17,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

console.log(person); // { name: 'Arda', surname: 'Güler', age: 17, fullName: [Function: fullName] }

const muffafa = Object.create(person);
muffafa.name = 'Muhammed Mustafa';
muffafa.surname = 'Savar';

console.log(muffafa); // { name: 'Muhammed Mustafa', surname: 'Savar'}
console.log(muffafa.age); // 17

muffafa.age = 22;
console.log(muffafa); // { name: 'Muhammed Mustafa', surname: 'Savar', age: 22 }
console.log(muffafa.age); // 22

console.log(muffafa.fullName()); // Muhammed Mustafa Savar
```

[<< Ders 2](../02/readme.md) | [Ders 4 >>](../04/readme.md)
