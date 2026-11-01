import express from "express"
import cardRoutes from "./routes/cardRoutes.js"

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Servidor funcionando!"})
})

app.use("/cards", cardRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})