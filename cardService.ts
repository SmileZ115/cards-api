import type { Card } from "./types.ts"

const claudeCard = {id: 1, name: "Claude", power: 20}
const arthuCard = {id: 2, name: "Arthu", power: 10}
const discordCard = {id: 3, name: "Discord", power: 5}

const cards: Card[] = [claudeCard, arthuCard, discordCard]

export function findCard(id: number):Card | undefined {
    return cards.find((f) => f.id === id)
}

export function listCards():Card[] {
    return cards
}

export function createCard(name: string, power: number):Card {
    const ids = cards.map((i) => i.id)
    const newId = Math.max(...ids) + 1
    const newCard = {id: newId, name, power}
    cards.push(newCard)
    return newCard
}

export function updateCard(id: number, name: string, power: number):Card | undefined {
    const card = findCard(id)
    if (!card) {
        return undefined
    }
    card.name = name
    card.power = power
    return card
}

export function deleteCard(id: number): boolean {
    const index = cards.findIndex((c) => c.id === id)
    if (index === -1) {
        return false
    }
    cards.splice(index, 1)
    return true
}