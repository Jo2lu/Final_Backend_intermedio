const http = require('http')
const secrets = require('./secrets.js')
const mysql = require("mysql2")

const server = http.createServer((req, res)=>{

    const connection = mysql.createConnection({
        host:'localhost',
        user:"root",
        password: secrets.sqlconn,
        database: 'StoreBooks'
    })
    res.writeHead(200, {'Content-type': 'text/plain'})

    connection.query("SELECT * FROM Books", (err,res)=>{
        if(err){
            res.end("Error executing query",err)
            return
        }
        res.end("RESPONSE: ", JSON.stringify(res))
    
        connection.end((err)=>{
            if(err){
                res.end("Error closing the connection", err)
            }
            res.end("Connection closed")
        })
        res.end()

    })
})

server.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
})