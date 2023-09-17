const noLibrosTotal = "http://localhost:3000/totalBooks"

fetch(noLibrosTotal)
    .then((res) => {
        if (!res.ok) {
            console.error("Base de datos no funciona, revisa que la url sea correcta y que esté funcionando")
            return
        }
        return res.json()
    })
    .then((res) => {
        console.log('El resultado es: ', res)
        librosTotal(res)
    })
    .catch((err) => {
        console.log("Existio un error ", err)
    })

let totalLibros = ""
const librosTotal = (data) => {
    for (const libro of data) {
        totalLibros += `
        Te presentamos ${libro} libros que no te puedes perder 
        `
    }
    document.querySelector("#noTotalLibros").innerHTML = totalLibros;
}