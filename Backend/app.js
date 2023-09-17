const express = require('express')
const secrets = require('./secrets.js')
const mysql = require("mysql2")
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host:'localhost',
    user:"root",
    password: secrets.sqlconn,
    database: 'StoreBooks'
})

app.use(bodyParser.json())

app.get('/books', (req, res)=>{
    const sql = "SELECT * FROM Books"

    connection.query(sql, (err, result)=>{
        if(err){
            res.status(500).send("Error al ejecutar la query ", err.message)
        }
        res.json(result)
    })
})


//Todos los libros
app.get('/totalBooks', (req, res)=>{
    const sql = "SELECT COUNT(*) FROM Books;";

    connection.query(sql, (err, result)=>{
        if(err){
            res.status(500).send("Error al ejecutar la query ", err.message)
        }
        res.json(Object.values(result[0]));
    })
})

//Libro por id ???
app.get('/bookById/:id', (req, res)=>{
    const sql = "SELECT * FROM books WHERE books_id=;";

    connection.query(sql, (err, result)=>{
        if(err){
            res.status(500).send("Error al ejecutar la query ", err.message)
        }
        res.json(result)
    })
})

// Ultimos Libros
app.get('/bookPublishersOf2023', (req, res)=>{
    const sql = "SELECT * FROM books ORDER BY release_year Desc LIMIT 8;";

    // colocar un where para indicar con exactitud el año dl 2023
    connection.query(sql, (err, result)=>{
        if(err){
            res.status(500).send("Error al ejecutar la query ", err.message)
        }
        res.json(result)
    })
})
            app.listen(3000, ()=>{
                console.log('El servidor corre en el puerto 3000')
            })