import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/api", (req, res) => {
  res.json({ data: "helloo" });
});

import reportDataRouter from "./routes/reportsData.route.js";

app.use("/api/v1/reports", reportDataRouter);

export { app };
