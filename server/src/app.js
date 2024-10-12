import express from "express";
import cors from "cors";
import "express-async-errors";
import router from "./router.js";
import { errorHandler, unknownEndpoint } from "./errorHandler.js";

const app = express();

app.use(cors());

app.use("/api", router);

app.use(errorHandler);
app.use(unknownEndpoint);

export default app;
