# cards-api

A REST API built with Node.js, Express, and TypeScript for learning backend development.

## About

A card management API that lets you create, list, search, update, and delete cards.

The project was inspired by my other project, [Gwent](https://github.com/SmileZ115/gwent). This is my first backend project, developed as a hands-on learning exercise to understand TypeScript, HTTP, REST APIs, and backend architecture.

## Features

- Create cards with a name and power value
- List all cards
- Find a specific card by its ID
- Filter cards by minimum power
- Update a card's power
- Delete cards
- Validate incoming requests
- Handle HTTP responses and errors
- Organize code using routes, services, and reusable validation functions

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://tsx.is/) — TypeScript execution and development watch mode

## Getting Started

### Requirements

- Node.js
- npm

### Installation

Clone the repository and enter the project directory:

```bash
git clone https://github.com/SmileZ115/cards-api.git
cd cards-api
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The server runs at:

`http://localhost:3000`

### Type Checking

Run the TypeScript compiler to check for type errors:

```bash
npm run check
```

This command validates types without generating JavaScript files.

## API Routes

| Method | Endpoint | Description | Success | Errors |
|---|---|---|---|---|
| GET | `/` | Check server status | 200 | — |
| GET | `/cards` | List all cards | 200 | — |
| GET | `/cards/:id` | Find a card by ID | 200 | 400, 404 |
| GET | `/cards/strong?minPower=12` | Filter cards by minimum power | 200 | 400 |
| POST | `/cards` | Create a new card | 201 | 400 |
| PATCH | `/cards/:id` | Update a card's power | 200 | 400, 404 |
| DELETE | `/cards/:id` | Delete a card by ID | 204 | 400, 404 |

### Create a Card

```bash
curl -i -X POST http://localhost:3000/cards \
  -H "Content-Type: application/json" \
  -d '{"name":"Vesemir","power":10}'
```

Example response:

```json
{
  "id": 4,
  "name": "Vesemir",
  "power": 10
}
```

The request body requires a non-empty `name` and a positive numeric `power`. The server generates the card's ID automatically.

### List All Cards

```bash
curl http://localhost:3000/cards
```

### Find a Card by ID

```bash
curl http://localhost:3000/cards/1
```

### Filter Cards by Minimum Power

```bash
curl 'http://localhost:3000/cards/strong?minPower=12'
```

Returns all cards with power greater than or equal to `12`.

If no cards match the filter, the API returns `200 OK` with an empty array (`[]`).

The `minPower` parameter must be a finite number greater than or equal to zero.

### Update a Card's Power

```bash
curl -i -X PATCH http://localhost:3000/cards/1 \
  -H "Content-Type: application/json" \
  -d '{"power":20}'
