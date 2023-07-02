# Object Part III, Destructuring, Spread, Rest, Yeni Söz Dizimleri

[<< Anasayfa](../readme.md)

## 🔗 Ders Videosu

[JavaScript Karmaşası : 05 : Object Part III, Destructuring, Spread, Rest, Yeni Söz Dizimleri](https://youtu.be/p9K8ibJhkaY)

## 😎 Shorthand Properties

```javascript
let name = "mustafa", age = 22

const myObj = {
    name: name,
    age: age
} 

console.log(myObj.name)
console.log(myObj.age)
```

```javascript
let name = "mustafa", age = 22

const myObj = {
    name,
    age
} 

console.log(myObj.name)
console.log(myObj.age)
```

## 🧮 Computed Property Names

```javascript
// ES5
let prop1 = "name"

let myObj = {}

myObj[prop1] = "Muffafa" 

console.log(myObj.name) // Muffafa
```

```javascript
// ES6
let prop1 = "name"

let myObj = {
    [prop1]: "Muffafa"
}

console.log(myObj.name) // Muffafa
```

## 🏎️ Shorthand Method Syntax

```javascript
const person = {
    name: 'Arda',
    surname: 'Güler',
    age: 17,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

console.log(person.fullName()) // Arda Güler
```

```javascript
const person = {
    name: 'Arda',
    surname: 'Güler',
    age: 17,
    fullName() {
        return this.name + " " + this.surname
    }
}

console.log(person.fullName()) // Arda Güler
```

## 🧽 Object Destructuring

```javascript
const person = {
    name: 'Arda',
    surname: 'Güler',
    age: 17,
    fullName() {
        return this.name + " " + this.surname
    }
}

let myVar1 = person.name
console.log(myVar1) // Arda
let myVar2 = person.surname
console.log(myVar2) // Güler
```

```javascript
const person = {
    name: 'Arda',
    surname: 'Güler',
    age: 17,
    fullName() {
        return this.name + " " + this.surname
    }
}

let { name: myVar3, surname: myVar4 } = person
console.log(myVar3) // Arda
console.log(myVar4) // Güler
```

```javascript
const person = {
    name: 'Arda',
    surname: 'Güler',
    age: 17,
    fullName() {
        return this.name + " " + this.surname
    }
}

let {name, surname} = person
console.log(name) // Arda
console.log(surname) // Güler
```

```javascript
const books = [
  {
    title: "Kırmızı Pazartesi",
    author: "Haruki Murakami",
    pageNum: 296,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
    topic:
      "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
  },
  {
    title: "Şeker Portakalı",
    author: "Jose Muro de Vasconselos",
    pageNum: 200,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
    topic:
      "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
  },
  {
    title: "En Uzun Yüzyıl",
    author: "İlber Ortaylı",
    pageNum: 296,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
    topic:
      "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    pageNum: 200,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
    topic:
      "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
  },
  {
    title: "Karamazov Kardeşler",
    author: "Fyodor Mihayloviç Dostoyevski",
    pageNum: 200,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
    topic:
      "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
  },
  {
    title: "Sultanın Korsanları",
    author: "Emrah Safa Gürcan",
    pageNum: 296,
    imageURL:
      "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
    topic:
      "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
  },
];

for (const { title, author, pageNum } of books) {
  console.log(title + ": " + author + ": " + pageNum);
}
```

## 😜 Spread Operator

```javascript
function myFunction(x, y, z) {
    console.log(x + ": " + y + ": " + z); // 0: 1: 2
}

const args = [0, 1, 2];
myFunction(...args);
```

```javascript
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];

console.log(lyrics) //  ["head", "shoulders", "knees", "and", "toes"]
```

```javascript
const myObj1 = {
    name: 'arin',
    age: 6
}

const myObj2 = {
    job: 'student',
    gender: 'female'
}

const arin = {...myObj1, school: 'Zehra Baysal', ...myObj2};

console.log(arin);
```

## 🫠 Rest Operator

```javascript
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```

```javascript
const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
}

const {name, ...rest} = person;

console.log(name); // John

console.log(rest); // { surname: 'Doe', age: 40, fullName: [Function: fullName] }
```

## ⭐️ Object Values - Object Entries

```javascript
const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
}

console.log(Object.keys(person)); // [ 'name', 'surname', 'age', 'fullName' ]
console.log(Object.values(person)); // [ 'John', 'Doe', 40, [Function: fullName] ]

// [
//   [ 'name', 'John' ],
//   [ 'surname', 'Doe' ],
//   [ 'age', 40 ],
//   [ 'fullName', [Function: fullName] ]
// ]
console.log(Object.entries(person)); 
```

[<< Ders 4](../04/readme.md) | [Ders 6 >>](../06/readme.md)
