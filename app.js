const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'sql10.freemysqlhosting.net',
    user:'sql10701770',
    password:'uh4Vi5Y7dZ',
    database:'sql10701770'

})

connection.connect()

//inserir dados - insert into nometabela
function inserir(lg,sn,mail) {
    let sql = "insert into users set?"
    let dados = {login:lg, senha:sn, email:mail}

    connection.query(sql,dados, function(error,results,fields){
        if(error) throw error
        console.log("Cadastro com sucesso!")
    })
}
//selecionar dados por id - select nometabela
function selecionaPorId(id){
    let sql = "select * from users where id = ?"
    connection.query(sql, id, function(error, results, fields){
        for(let i=0;i<results.length;i++){
        if(error) throw error
        console.log("Selecionado: " + results[i].id + ":" + results[i].login + ":" + results[i].email)
        }
    })

}

function selecionarTudo(){
    let sql = "select * from users"
    connection.query(sql, function(error, results, fields){
        for(let i=0;i<results.length;i++){
        if(error) throw error
        console.log("Selecionado: " + results[i].id + ":" + results[i].login + ":" + results[i].email)
        }
    })

}

function apagar(id){
    let sql = "Delete from users where id = ?"
    connection.query(sql, id, function(error, results, fields){
        if(error) throw error
        console.log("Apagado com sucesso! " + id)
})
}

connection.end()

