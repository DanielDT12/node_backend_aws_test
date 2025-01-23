import express from "express";
import {
	getAllStatusesController,
	addStatusController,
	deleteStatusController,
} from "../controllers/serverStatusController";

const router = express.Router();

router.get("/statuses", getAllStatusesController);
router.post("/statuses", addStatusController);
router.delete("/statuses/:id", deleteStatusController);

export default router;
