import express from "express";
import morgan from "morgan";
import path from "path";
import { PORT } from "./config.js";

import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();

app.use(morgan("dev"));

app.use(paymentRoutes);

app.use(express.static(path.resolve("src/public")));

app.listen(PORT, () =>
	console.log(`Listening from port: http://localhost:${PORT}`)
);
