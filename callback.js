/* function agregarHttp(url) {
    return "http://" + url
}

function procesar(array,callback) {
    for (let i = 0; i < array.length; i++) {
        let arrayNuevo = []
        arrayNuevo.push(callback(array[i]))
    }
    return arrayNuevo
} */
function agregarHttp(url) {
    return "http://" + url
}

function procesar(array,fun){
    let arrayNuevo = []
    for (let i = 0; i < array.length; i++) {
        arrayNuevo.push(fun(array[i]))
    }
    return arrayNuevo
}

console.log(procesar("www.google.com","www.yahoo.com"),url);