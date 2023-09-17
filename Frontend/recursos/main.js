const arregloTodosLosLibros = "http://localhost:3000/books"

fetch(arregloTodosLosLibros)
    .then((res) => {
        if (!res.ok) {
            console.error("Base de datos no funciona, revisa que la url sea correcta y que esté funcionando")
            return
        }
        return res.json()
    })
    .then((res) => {
        console.log('Mi respuesta es ', res)
        renderBooks(res)
    })
    .catch((err) => {
        console.log("Existio un error ", err)
    })

let cardHTML = ""
const renderBooks = (data) => {
    for (const libro of data) {
        cardHTML += `
        <div class="card" id="generic" data-id="${libro.books_id}">
        <div class="image">
            <img src="${libro.url_image}">
        </div>
        <div class="content">
            <div class="header">
                <h2>${libro.title}</h2>
            </div>
            <div class="description">
                <p>${libro.author}</p>
            </div>
        </div>
        <div class="extra content">
            <button class="ui button" value="${libro.price}">
                <i class="cart plus icon"></i>
                $${libro.price}
            </button>
            <button id="buttonDescrip" class="ui right button teal" type="button" ><i class="eye icon"></i></button>
            <div class="ui modal test_${libro.books_id}">
                <i class="close icon"></i>
                <div class="header">
                    <h2>${libro.title}</h2>
                </div>
                <div class="image scrolling content">
                    <div class="ui medium image">
                        <img src="${libro.url_image}">
                    </div>
                    <div class="description">
                        <div class="ui header">
                            <h2>Autor: ${libro.author}</h2>
                        </div>
                        <p>Editorial: ${libro.publisher}</p>
                        <p>Fecha de Publicación: ${libro.release_day} de ${libro.release_month} de
                            ${libro.release_year}
                        </p>
                        <p>Paginas: ${libro.pages}</p>
                        <p>ISBN: ${libro.isbn}</p>
                        <p>Precio: ${libro.price}</p>
                        <p>id: ${libro.books_id}</p>
                        <h3>Descripción</h3>
                        <p>${libro.descrip}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
    document.querySelector("#todLosLib").innerHTML = cardHTML
}