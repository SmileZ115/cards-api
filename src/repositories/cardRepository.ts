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