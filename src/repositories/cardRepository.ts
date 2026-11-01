import type { Card } from "../types.js";

const cards: Card[] = [
  { id: 1, name: "Geralt", power: 15 },
  { id: 2, name: "Ciri", power: 12 },
  { id: 3, name: "Yennefer", power: 8 }
]

export function findAllCards(): Card[] {
    return cards
}

export function findCardById(id: number): Card | undefined {
    const foundCard = cards.find((c) => c.id === id)

    return foundCard
}

export function findCardsByMinPower(minPower: number): Card[] {
    const foundCards = cards.filter((c) => c.power >= minPower)
    return foundCards
}

export function insertCard(card: Card): void {
    cards.push(card)
}

export function removeCard(id: number): boolean {
    const index = cards.findIndex((c) => c.id === id)

    if (index >= 0) {
        cards.splice(index, 1)
        return true
    }

    return false
}

export function generateCardId(): number {
    let highestId = 0

    for (const card of cards) {
        if (card.id > highestId) {
            highestId = card.id
        }
    }

    return highestId + 1
}