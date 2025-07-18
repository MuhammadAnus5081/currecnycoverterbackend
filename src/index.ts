import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import currencyRoutes from "./routes/currency";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", currencyRoutes);

// Instead of app.listen(), export the app for Vercel
export default app;
