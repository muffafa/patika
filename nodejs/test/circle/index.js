// require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.

const {circleCircumference, circleArea} = require('./circle.js')

const area = circleArea(5)
const circumference = circleCircumference(5)