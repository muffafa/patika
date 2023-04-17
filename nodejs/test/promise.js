const promise = new Promise((resolve, reject) =>{
    //resolve("veriler alindi")
    reject("baglanti hatasi")
})

promise
    .then(val => {
        console.log(val)
    }).catch(err => {
        console.error(err)
    })
