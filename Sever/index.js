const express = require('express')
const app = express()
const port = 3001

app.get('/getDough', (req, res) => res.header({"Access-Control-Allow-Origin": "*"}).send(["Tradicional", "Integral"]))
app.get('/getSize', (req, res) => res.header({"Access-Control-Allow-Origin": "*"}).send(["Pequeno","Medio","Grande"]))
app.get('/getFill', (req, res) => res.header({"Access-Control-Allow-Origin": "*"}).send(["Queijo", "Peperoni", "Lombo", "Marguerita"]))
app.get('/getPoints', (req, res) => res.header({"Access-Control-Allow-Origin": "*"}).send("Você ganhou (Error 404) pontos!!"))
app.get('/getSuggestion', (req, res) => res.header({"Access-Control-Allow-Origin": "*"}).send([0]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
