export function validateCard(name: unknown, power: unknown): boolean {
  return (
    typeof name === "string" &&
    name.length > 0 &&
    isValidPower(power)
  )
}

export function validateCardBody(body: unknown): boolean {
  if (
    typeof body === "object" &&
    body !== null &&
    "name" in body &&
    "power" in body
  ) {
    return validateCard(body.name, body.power)
  }

  return false
}

export function isValidCardId(id: number): boolean {
  return Number.isInteger(id) && id > 0
}

export function isValidPower(power: unknown): power is number {
  return Number.isFinite(power) && typeof power === "number" && power > 0
}