# Class Part I, Neden Class?, Constructor Metodu

[<< Anasayfa](../readme.md)

## 🔗 Ders Videosu

[JavaScript Karmaşası : 06 : Class Part I, Neden Class?, Constructor Metodu](https://youtu.be/A6C9fI4B0Ik)

## Constructor Function

```javascript
function Person(name, surname, age) {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = fullName;
}

 function fullName() {
    return this.name + " " + this.surname
} 
```

```javascript
function Person(name, surname, age) {

    this.name = name;
    this.surname = surname;
    this.age = age;
}

Person.prototype.fullName = function() {
    return this.name + " " + this.surname
}

Person.prototype.friends = ["Ela", "Rüzgar"]


const arin = new Person("Arin", "Çekiç", 5);
const elis = new Person("Elis", "Çekiç", 3);

console.log(arin); // Person { name: 'Arin', surname: 'Çekiç', age: 5 }
console.log(elis); // Person { name: 'Elis', surname: 'Çekiç', age: 3 }
console.log(arin.fullName());  // Arin Çekiç
console.log(elis.fullName()); // Elis Çekiç

console.log(arin.friends); // [ 'Ela', 'Rüzgar' ]
console.log(elis.friends); // [ 'Ela', 'Rüzgar' ]

arin.friends.push("Çınar");
console.log(arin.friends); // [ 'Ela', 'Rüzgar', 'Çınar' ]
console.log(elis.friends); // ⚠️ [ 'Ela', 'Rüzgar', 'Çınar' ]

console.log(Person) // ⚠️ [Function: Person]

console.log(typeof Person) // function
```

## Class Decleration

```javascript
class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Ela", "Rüzgar"]
    }

    fullName() {
        return this.name + " " + this.surname
    }
}
```

## Class Expression

```javascript
const Person = class {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Ela", "Rüzgar"]
    }

    fullName() {
        return this.name + " " + this.surname
    }  
}

const arin = new Person("Arin", "Çekiç", 5);
const elis = new Person("Elis", "Çekiç", 3);

console.log(arin); 
// Person {
//   name: 'Arin',
//   surname: 'Çekiç',
//   age: 5,
//   friends: [ 'Ela', 'Rüzgar' ]
// }
console.log(elis);
// Person {
//   name: 'Elis',
//   surname: 'Çekiç',
//   age: 3,
//   friends: [ 'Ela', 'Rüzgar' ]
// }
console.log(arin.fullName()); // Arin Çekiç
console.log(elis.fullName()); // Elis Çekiç

console.log(arin.friends); // [ 'Ela', 'Rüzgar' ]
console.log(elis.friends); // [ 'Ela', 'Rüzgar' ]
arin.friends.push("Çınar");
console.log(arin.friends); // [ 'Ela', 'Rüzgar', 'Çınar' ]
console.log(elis.friends); // [ 'Ela', 'Rüzgar' ]

console.log(Person) // ⚠️ [class Person]

console.log(typeof Person) // ⚠️ function
```

[<< Ders 5](../05/readme.md) | [Ders 7 >>](../07/readme.md)
