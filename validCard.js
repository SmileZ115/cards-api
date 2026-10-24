function validCard(body) {
    return body && typeof body.name === "string" && body.name !== "" && typeof body.power === "number"
}

module.exports = validCard