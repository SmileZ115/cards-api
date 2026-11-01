import { Router } from "express";

import {
getCardByIdController,
createCardController,
deleteCardController,
updateCardPowerController,
getAllCardsController,
getStrongCardsController
} from "../controllers/cardController.js";

const router = Router()

router.get("/", getAllCardsController)

router.post("/", createCardController)

router.get("/strong", getStrongCardsController)

router.get("/:id", getCardByIdController)

router.delete("/:id", deleteCardController)

router.patch("/:id", updateCardPowerController)

export default router