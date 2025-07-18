import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import currencyRoutes from "./routes/currency";
import serverless from 'serverless-http';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", currencyRoutes);

// Instead of app.listen(), export the app for Vercel
//app.listen(3000, () => console.log("Server running"));

export default serverless(app);
