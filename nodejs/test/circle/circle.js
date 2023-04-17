// Daire alan : circleArea ve 
// daire çevre : circleCircumference fonksiyonları içeren ve 
// consola sonuçları yazdıran circle.js dosyası oluşturunuz.
// module.exports yöntemi ile fonksiyonları oluştururken export ediniz.


const PI = 3.14

circleArea = (radius) => {
    const area = PI * radius * radius
    console.log(area);
}

circleCircumference = (radius) => {
    const circumference =  PI * radius * 2
    console.log(circumference); 
}

module.exports = {
    circleArea,
    circleCircumference
}