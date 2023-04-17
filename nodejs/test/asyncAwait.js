const promise = new Promise((resolve, reject) =>{
    //resolve("veriler alindi")
    reject("baglanti hatasi")
})

const makeRequest = async () => {
    try {
        const response = await promise
        console.log(response)
    }catch (err) {
        console.log(err)
    }
}

makeRequest()