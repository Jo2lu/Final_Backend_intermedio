const bookPublishersOf2023 = "http://localhost:3000/bookPublishersOf2023"

fetch(bookPublishersOf2023)
    .then((res) => {
        if (!res.ok) {
            console.error("Base de datos no funciona, revisa que la url sea correcta y que esté funcionando")
            return
        }
        return res.json()
    })
    .then((res) => {
        console.log('2045 errores que no te afectaron a ti ', res)
        libros2023(res)
    })
    .catch((err) => {
        console.log("Existio un error ", err)
    })

let books2023 = ""
const libros2023 = (data) => {
    for (const libro of data) {
        books2023 += `
        <div style="margin: 10px; background-color: #fff; padding: 10px;">
                <div style="text-align: center; background-color: bisque;">
                    <img src="${libro.url_image}" alt="Img" >
                    <div>
                        <h2>Titulo: ${libro.title}</h2>
                        <h3>Autor: ${libro.author}</h3>
                        <p>Editorial: ${libro.publisher}</p>
                        <p>Fecha de publicación: ${libro.release_day} de ${libro.release_month} del ${libro.release_year}</p>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector("#libr2023").innerHTML = books2023;
}