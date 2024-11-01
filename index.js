import express from "express";
import connectMongoDB from "./config/db-config.js";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import usersRoute from "./routes/users-route.js";
import campaignsRoute from "./routes/campaigns-route.js";
import paymentsRoute from "./routes/payments-route.js";
import donationsRoute from "./routes/donations-route.js";
import reportsRoute from "./routes/reports-route.js";
dotenv.config();

connectMongoDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", usersRoute);
app.use("/api/campaigns", campaignsRoute);
app.use("/api/payments", paymentsRoute);
app.use("/api/donations", donationsRoute);
app.use("/api/reports", reportsRoute);

const port = 5000;

app.listen(port, () => {
  console.log("Node+Express server successful", port);
});
