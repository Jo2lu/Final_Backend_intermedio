const totalTableBooks = "http://localhost:3000/books"

fetch(totalTableBooks)
    .then((res) => {
        if (!res.ok) {
            console.error("Base de datos no funciona, revisa que la url sea correcta y que esté funcionando")
            return
        }
        return res.json()
    })
    .then((res) => {
        console.log('Esto es un arreglo o solo un número??? ', res)
        renderTable(res)
    })
    .catch((err) => {
        console.log("Existio un error ", err)
    })

let tablaCompletaDeLibros = ""
const renderTable = (data) => {
    for (const libro of data) {
        tablaCompletaDeLibros += `
        <tr>
            <td>${libro.books_id}</th>
            <td><img id="idTabla" src="${libro.url_image}" ></th>
            <td>${libro.title}</th>
            <td>${libro.author}</th>
            <td>${libro.publisher}</th>
            <td>${libro.release_day} de ${libro.release_month} del ${libro.release_year}</th>
            <td>${libro.pages}</th>
            <td>${libro.isbn}</th>
            <td>${libro.price}</th>
        </tr>
        `
    }
    document.querySelector("#tablaTotalLibros").innerHTML = tablaCompletaDeLibros
}