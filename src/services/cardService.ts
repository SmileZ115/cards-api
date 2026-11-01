import type { Card } from "../types.js";
import { findAllCards, findCardById, findCardsByMinPower, insertCard, removeCard, generateCardId } from "../repositories/cardRepository.js";

export function getAllCards(): Card[] {
    return findAllCards()
}

export function createCard(name: string, power: number): Card {
    const newId = generateCardId()
    const newCard = {id: newId, name, power}

    insertCard(newCard)

    return newCard
}

export function getCardById(id: number): Card | undefined {
    return findCardById(id)
}

export function deleteCard(id: number): boolean {
    return removeCard(id)
}

export function updateCardPower(id: number, newPower: number): Card | undefined {
    const foundCard = getCardById(id)

    if (foundCard === undefined) {
        return undefined
    }

    foundCard.power = newPower

    return foundCard
}

export function getCardsByMinPower(minPower: number): Card[] {
    return findCardsByMinPower(minPower)
}