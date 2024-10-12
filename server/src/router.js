import { Router } from "express";
import { dataController, getTopHeadlines } from "./controller.js";

const router = Router();

router.get("/data", dataController);
router.get("/top-headlines", getTopHeadlines);

export default router;
