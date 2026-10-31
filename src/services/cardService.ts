import type { Card } from "../types.js";

const cards: Card[] = [
  { id: 1, name: "Geralt", power: 15 },
  { id: 2, name: "Ciri", power: 12 },
  { id: 3, name: "Yennefer", power: 8 }
]

export function getAllCards(): Card[] {
    return cards
}

export function createCard(name: string, power: number): Card {
    const newId = generateCardId(cards)
    const newCard = {id: newId, name, power}
    cards.push(newCard)
    return newCard
}

export function getCardById(id: number): Card | undefined {
    const foundCard = cards.find((c) => c.id === id)
    return foundCard
}

export function deleteCard(id: number): boolean {
    const index = cards.findIndex((c) => c.id === id)
    if(index >= 0) {
        cards.splice(index, 1)
        return true
    }
    return false
}

export function updateCardPower(id: number, newPower: number): Card | undefined {
    const foundCard = getCardById(id)
    if(foundCard === undefined) {
        return undefined
    }
    foundCard.power = newPower
    return foundCard
}

export function getCardsByMinPower(minPower: number): Card[] {
    const chosenCards = cards.filter((c) => c.power >= minPower)
    return chosenCards
}

function generateCardId(cards: Card[]): number {
    let highestId = 0
    for(const card of cards) {
        if(card.id > highestId) {
            highestId = card.id
        }
    }
    return highestId + 1
}