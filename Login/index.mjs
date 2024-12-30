import express from "express";
import { register } from "module";
import path from 'path';

const app = express()
const port = 3001

app.use(express.urlencoded())

app.get('/', (req, res) => {

    res.sendFile(path.resolve("seiten/index.html"))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve("seiten/login.html"))
})

app.get('/zimmer', (req, res) => {
    res.sendFile(path.resolve("seiten/zimmer.html"))
})


app.post('/geheime-seite.html', (req, res) => {
    console.log(req.body)
    const benutzername = req.body.benutzer;
    const passwort = req.body.password

    if (benutzername === 'Tester' && passwort === '123') {
      
        res.sendFile(path.resolve("seiten/geheime-seite.html"))

    } else if (benutzername === "Quinn" && passwort === "Hanno") {
      
        res.sendFile(path.resolve("seiten/quinn/index_quinn.html"))
        

    } else {
        res.sendFile(path.resolve("seiten/verboten.html"))

    }


    console.log(req.body)

})

app.get('/login_index.html', (req, res) => {
    res.sendFile(path.resolve("seiten_login/login_index.html"))
})

app.get('/einkaufsliste.html', (req, res) => {
    res.sendFile(path.resolve('seiten/einkaufsliste.html'))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve("seiten/index.html"))
})

app.get('/login_quinn.html', (req, res) => {
    res.sendFile(path.resolve("seiten/quinn/login/login_quinn.html"))
})