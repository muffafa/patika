// All positive integers greater than 1 that are divisible by 1 and itself.

const arguments = process.argv.slice(2);

function showPrimeNumbers(lowNumber, highNumber) {

    if(lowNumber < 2){
        lowNumber = 2;
    } 

    for (let i = lowNumber; i <= highNumber; i++) {

        let isPrime = true

        for (let j = 2; j < i; j++) {
            if( i % j == 0) {
                isPrime = false
                break;
            }
        }

        isPrime ? console.log(i) : ""; 
    }
}

showPrimeNumbers(parseInt(arguments[0]), parseInt(arguments[1]));