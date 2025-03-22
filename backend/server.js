const express = require("express");
const cors = require("cors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const usuarios = JSON.parse(fs.readFileSync(__dirname + "/usuarios.json", "utf-8"));


const SECRET_KEY = process.env.SECRET_KEY || "segredo123"; // Chave secreta para assinar o token

// Rota de login - gera um token JWT
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = usuarios.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
        console.log("Token gerado:", token); //Verifica se o token está sendo gerado
        res.json({ success: true, token });
    } else {
        res.status(401).json({ success: false, message: "Usuário ou senha inválidos!" });
    }
});


function autenticarToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // 🔹 Agora extrai corretamente o token

    if (!token) {
        console.log("Nenhum token fornecido!");
        return res.status(403).json({ message: "Acesso negado!" });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log("Erro ao verificar token:", err.message);
            return res.status(403).json({ message: "Token inválido!" });
        }

        console.log("Token válido! Usuário:", decoded.username);
        req.user = decoded;
        next();
    });
}

app.get("/dashboard", autenticarToken, (req, res) => {
    res.json({ message: `Bem-vindo, ${req.user.username}!` });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
