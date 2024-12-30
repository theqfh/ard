import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routen
app.get("/", (req, res) => {
  res.sendFile(path.resolve("seiten/index.html"));
});

app.get("/login.html", (req, res) => {
  res.sendFile(path.resolve("seiten/login.html"));
});

app.get("/fussball.html", (req, res) => {
  res.sendFile(path.resolve("seiten/fussball.html"));
});

app.post("/geheime-seite.html", (req, res) => {
  console.log(req.body);
  const benutzername = req.body.benutzer;
  const passwort = req.body.password;

  if (benutzername === "Tester" && passwort === "123") {
    res.sendFile(path.resolve("seiten/geheime-seite.html"));
  } else if (benutzername === "Quinn" && passwort === "Hanno") {
    res.sendFile(path.resolve("seiten/quinn/index_quinn.html"));
  } else {
    res.sendFile(path.resolve("seiten/verboten.html"));
  }

  console.log(req.body);
});

app.get("/login_index.html", (req, res) => {
  res.sendFile(path.resolve("seiten_login/login_index.html"));
});

app.get("/einkaufsliste.html", (req, res) => {
  res.sendFile(path.resolve("seiten/einkaufsliste.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.resolve("seiten/index.html"));
});

app.get("/login_quinn.html", (req, res) => {
  res.sendFile(path.resolve("seiten/quinn/login/login_quinn.html"));
});

// Server starten
app.listen(port, "0.0.0.0", () => {
  console.log(`HTTP-Server läuft unter http://0.0.0.0:${port}`);
});
