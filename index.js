const express = require("express")
const app = express()

const claudeCard = {id: 1, name: "Claude", power: 20}
const arthuCard = {id: 2, name: "Arthu", power: 10}
const discordCard = {id: 3, name: "Discord", power: 5}

const cards = [claudeCard, arthuCard, discordCard]

function validCard(body) {
    return body && typeof body.name === "string" && body.name !== "" && typeof body.power === "number"
}

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Bem vindo a API de cartas!")
})

app.get("/cartas/:id", (req, res) => {
    const id = Number(req.params.id)
    const card = cards.find((c) => c.id === id)
    if (!card) {
        return res.status(404).json({erro: "Essa carta nao foi encontrada."})
    }
    res.json(card)
})

app.get("/cartas", (req, res) => {
    res.json(cards)
})

app.post("/cartas", (req, res) => {
    if (!validCard(req.body)) {
        return res.status(400).json({erro: "Nao encontrei um nome ou poder para a carta."})
    }
    const ids = cards.map((i) => i.id)
    const newId = Math.max(...ids) + 1
    const newCard = {id: newId, name: req.body.name, power: req.body.power}
    cards.push(newCard)
    return res.status(201).json(newCard)
})

app.put("/cartas/:id", (req, res) => {
    const id = Number(req.params.id)
    const card = cards.find((c) => c.id === id)
    if (!validCard(req.body)){
        return res.status(400).json({erro: "Nao encontrei um nome ou poder para a carta."})
    }
    if (!card) {
        return res.status(404).json({erro: "Essa carta nao foi encontrada."})
    }
    card.name = req.body.name
    card.power = req.body.power
    return res.status(200).json(card)
})

app.delete("/cartas/:id", (req, res) => {
    const id = Number(req.params.id)
    const index = cards.findIndex((c) => c.id === id)
    if (index === -1) {
        return res.status(404).json({erro: "Essa carta nao foi encontrada."})
    }
    cards.splice(index, 1)
    res.status(204).send()
})

app.listen(3000, () => {
    console.log("O servidor esta rodando na porta 3000")
})
