import express from "express"
import {  deleteCard, updateCardPower } from "./services/cardService.js"
import cardRoutes from "./routes/cardRoutes.js"

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Servidor funcionando!"})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

app.use("/cards", cardRoutes)