import { Router } from "express"
import { validCard } from "../validCard.ts"
import { listCards, findCard, createCard, updateCard, deleteCard } from "../cardService.ts"

const router = Router()

router.get("/", (req, res) => {
    res.json(listCards())
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    const card = findCard(id)
    if (!card) {
        return res.status(404).json({erro: "Essa carta nao foi encontrada."})
    }
    res.json(card)
})

router.post("/", (req, res) => {
    if (!validCard(req.body)) {
        return res.status(400).json({erro: "Nao encontrei um nome ou poder para a carta."})
    }
    const newCard = createCard(req.body.name, req.body.power)
    return res.status(201).json(newCard)
})

router.put("/:id", (req, res) => {
    const id = Number(req.params.id)
    if (!validCard(req.body)){
        return res.status(400).json({erro: "Nao encontrei um nome ou poder para a carta."})
    }
    const card = updateCard(id, req.body.name, req.body.power)
    if (!card) {
        return res.status(404).json({erro: "Essa carta nao foi encontrada."})
    }
    return res.status(200).json(card)
})

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    const result = deleteCard(id)
    if (!result) {
        return res.status(404).json({erro: "Essa carta nao foi encontrada."})
    }
    res.status(204).send()
})

export default router
