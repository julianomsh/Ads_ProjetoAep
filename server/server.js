import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173', // Defina a origem permitida,
  }));
app.use(cookieParser());
app.use(express.json());


const con = mysql.createConnection({
    host: "db4free.net",
    user: "adsunicesumar",
    password: "unicesumar",
    database: "ads5semestre"
})

con.connect(function(err){
    if (err) {
        console.log("erro de conexao");
    }else{
        console.log("conectado");
    }

})

app.post('/Login', (req, res) => {
    const sql = "SELECT * FROM user WHERE email = ? AND  password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if(err) return res.json({Status: "Error", Error: "Erro ao executar a query"});
        if(result.length > 0) {
            return res.json({Status: "sucesso"})
        }else{
            return res.json({Status: "erro"})
        }
    })
})


app.listen(8081, () =>{
    console.log('Servidor rodando na porta 8081')
})