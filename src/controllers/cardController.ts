import type {
Request,
Response
} from "express";

import {
getCardById,
createCard,
deleteCard,
updateCardPower,
getAllCards,
getCardsByMinPower
} from "../services/cardService.js";

import {
isValidCardId,
validateCardBody,
isValidPower
} from "../validation.js";

export function getCardByIdController(req: Request, res: Response): void {
    const id = Number(req.params.id)

    if (!isValidCardId(id)) {
        res.status(400).json({ error: "Invalid ID"})
        return
    }

    const foundCard = getCardById(id)

    if (foundCard === undefined) {
        res.status(404).json({ error: "Nonexistent card."})
        return
    }

    res.status(200).json(foundCard)
}

export function createCardController(req: Request, res: Response): void {
    if (!validateCardBody(req.body)) {
        res.status(400).json({ error: "Invalid data for cards"})
        return
    }

    const newCard = createCard(req.body.name, req.body.power)

    res.status(201).json(newCard)
}

export function deleteCardController(req: Request, res: Response): void {
    const id = Number(req.params.id)

    if (!isValidCardId(id)) {
        res.status(400).json({ error: "Invalid ID"})
        return
    }

    const deleted = deleteCard(id)

    if (!deleted) {
        res.status(404).json({ error: "Nonexistent card."})
        return
    }

    res.status(204).send()
}

export function updateCardPowerController(req: Request, res: Response): void {
    const id = Number(req.params.id)
    const newPower: unknown = req.body?.power

    if (!isValidCardId(id)) {
        res.status(400).json({ error: "Invalid ID"})
        return
    }

    if (!isValidPower(newPower)) {
        res.status(400).json({ error: "Invalid Power."})
        return
    }

    const updatedCard = updateCardPower(id, newPower)

    if (updatedCard === undefined) {
        res.status(404).json({ error: "Nonexistent card."})
        return
    }

    res.status(200).json(updatedCard)
}

export function getAllCardsController(req: Request, res: Response): void {
    res.json(getAllCards())
}

export function getStrongCardsController(req: Request, res: Response): void {
    const rawMinPower = req.query.minPower

    if (typeof rawMinPower !== "string" || rawMinPower.trim() === "") {
        res.status(400).json({ error: "Invalid minPower"})
        return
    }

    const minPower = Number(rawMinPower)

    if (!Number.isFinite(minPower) || minPower < 0) {
        res.status(400).json({ error: "Invalid data for cards"})
        return
    }

    res.status(200).json(getCardsByMinPower(minPower))
}