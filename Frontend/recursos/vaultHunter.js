const vaultHunter = "http://localhost:3000/books"

fetch(vaultHunter)
    .then((res) => {
        if (!res.ok) {
            console.error("Base de datos no funciona, revisa que la url sea correcta y que esté funcionando")
            return
        }
        return res.json()
    })
    .then((res) => {
        console.log('Mi respuesta es ', res)
        buscador(res)
    })
    .catch((err) => {
        console.log("Existio un error ", err)
    })

let buscadorLibros = ""
const buscador = (data) => {
    for (const libro of data) {
        buscadorLibros += `
        
        `
    }
    document.querySelector("#todLosLib").innerHTML = buscadorLibros
}

