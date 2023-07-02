# Object Part II, Prototype nedir?, Inheritance, Basic Object, \_\_proto\_\_

[<< Anasayfa](../readme.md)

## 🔗 Ders Videosu

[JavaScript Karmaşası : 04 : Object Part II, Prototype nedir?, Inheritance, Basic Object, \_\_proto\_\_](https://youtu.be/ggG4W9lL0Sc)

## 💪🏻 Prototype

Şu kaynağa göz atabilirsiniz. 🔗 [Object prototypes - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

```javascript
// OBJECT + name, surname, age, fullName() ----> person
const person = {
    name: 'Arda',
    surname: 'Güler',
    age: 17,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

console.log(person.name); // Arda
console.log(person.nickname); // undefined
console.log(person.fullName())
//console.log(person.salaryWithOutTaxes()) // ❌ TypeError: person.salaryWithOutTaxes is not a function

console.log(person.toString()); // [object Object]
console.log(person.hasOwnProperty("name")) // true
console.log(person.hasOwnProperty("salary")) // false
```

```javascript
//OBJECT ---> myObj
const myObj = {}

console.log(myObj)
console.log(myObj.toString())
console.log(myObj.hasOwnProperty('name')) // false
```

```javascript
// OBJECT + name, surname, age, fullName() ----> Person ----> arin
function Person(name, surname, age) {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function() {
        return this.name + " " + this.surname
    }
}

const arin = new Person("Arin", "Çekiç", 6);
console.log(arin); // ⚠️ print on browser console to see __proto__
console.log(arin.toString()); // 

console.log(arin.__proto__); // ⚠️ print on browser console to see the result

// OBJECT + name, surname, age, fullName() ----> Person + job ----> elis
const elis = new Person("Elis", "Çekiç", 4); 
console.log(elis);
elis.job = "Child";
console.log(elis);
console.log(elis.toString()); 

elis.toString = function() {
    return "ELISSSSS";
}

console.log(elis.toString()); // ELISSSSS
```

Ortak methodları ve propertyleri, `prototype` içierisine ekleyebiliriz.

```javascript
function Person(name, age) {

    this.name = name;
    this.age = age;
}

Person.prototype.fullName = function() {
    return this.name + " " + this.surname
}

Person.prototype.surname = "Çekiç";

const elis = new Person("Elis",  4);

const arin = new Person("Arin",  6);

console.log(elis);
console.log(arin);
```

## 👨‍👨‍👦 Inheritance

Ata nesnenin özelliğinin child nesnelere aktarılmasına `inheritance` yani türkçesiyle `kalıtım` denir.

```javascript

const person = {
    name: 'XXXXXXXX',
    surname: 'XXXXXX',
    age: 0,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

const arin = Object.create(person);
console.log(arin);
console.log(arin.name);

arin.name = "Arin";

console.log(arin);

console.log(arin.age); // 0

arin.age = 6;

console.log(arin.age); // 6

console.log(arin);

console.log(arin.hasOwnProperty("age")); // true
console.log(arin.hasOwnProperty("surname")); // false

console.log("surname" in arin); // true
```

[<< Ders 3](../03/readme.md) | [Ders 5 >>](../05/readme.md)
