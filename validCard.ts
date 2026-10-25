import type { Card } from "./types.ts"

export function validCard(body: unknown): body is Card {
    return (
        typeof body === "object" &&
        body !== null &&
        "name" in body &&
        typeof body.name === "string" &&
        body.name !== "" &&
        "power" in body &&
        typeof body.power === "number"
    )
}