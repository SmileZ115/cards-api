import express from "express"
import router from "./routes/cards.ts"

const app = express()

app.use(express.json())

app.use("/cartas", router)

app.get("/", (req, res) => {
    res.send("Bem vindo a API de cartas!")
})

app.listen(3000, () => {
    console.log("O servidor esta rodando na porta 3000")
})
