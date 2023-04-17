const PI = 3.14

const arguments = process.argv.slice(2)

function printAreaOfACircle(radius){
    const area = PI * radius *  radius
    console.log(`The area of a circle with ${radius} is ${area}.`)
}

printAreaOfACircle(parseInt(arguments[0]))