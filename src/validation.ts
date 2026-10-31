export function validateCard(name: unknown, power: unknown): boolean {
  return (
    typeof name === "string" &&
    name.length > 0 &&
    typeof power === "number" &&
    power > 0
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