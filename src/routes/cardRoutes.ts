import { Router } from "express";
import { getAllCards, 
createCard,
getCardById,
deleteCard,
updateCardPower,
getCardsByMinPower
} from "../services/cardService.js";
import { validateCardBody } from "../validation.js";

const router = Router()

router.get("/", (req, res) => {
    res.json(getAllCards())
})

router.post("/", (req, res) => {
    if(!validateCardBody(req.body)) {
        res.status(400).json({ error: "Invalid data for cards"})
        return
    }
    const newCard = createCard(req.body.name, req.body.power)
    res.status(201).json(newCard)
})

router.get("/strong", (req, res) => {
    const rawMinPower = req.query.minPower
    if(typeof rawMinPower !== "string" || rawMinPower.trim() === "") {
        res.status(400).json({ error: "Invalid minPower"})
        return
    }
    const minPower = Number(rawMinPower)
    if(!Number.isFinite(minPower) || minPower < 0) {
        res.status(400).json({ error: "Invalid data for cards"})
        return
    }
    res.status(200).json(getCardsByMinPower(minPower))
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    if(!Number.isInteger(id) || id <= 0) {
        res.status(400).json({ error: "Invalid ID"})
        return
    }
    const foundCard = getCardById(id)
    if(foundCard === undefined) {
      res.status(404).json({ error: "Nonexistent card."})
        return
    }
    res.status(200).json(foundCard)
})

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
        if(!Number.isInteger(id) || id <= 0) {
            res.status(400).json({ error: "Invalid ID"})
            return
        }
        const deleted = deleteCard(id)
        if(!deleted) {
            res.status(404).json({ error: "Nonexistent card."})
            return
        }
        res.status(204).send()
})

router.patch("/:id", (req, res) => {
    const id = Number(req.params.id)
    const newPower: unknown = req.body?.power
    if(!Number.isInteger(id) || id <= 0) {
        res.status(400).json({ error: "Invalid ID"})
        return
    }
    if(typeof newPower != "number" || newPower <= 0 || !Number.isFinite(newPower)) {
        res.status(400).json({ error: "Invalid Power."})
        return
    }
    const updatedCard = updateCardPower(id, newPower)
    if(updatedCard === undefined) {
        res.status(404).json({ error: "Nonexistent card."})
        return
    }
    res.status(200).json(updatedCard)
})

export default router