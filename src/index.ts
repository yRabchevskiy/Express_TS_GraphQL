import express, { Express, Response, Request, NextFunction } from "express";
import dotenv from "dotenv";
import taskRoutes from "./Routes/taskRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use("/tasks", taskRoutes); // Add this line to mount the Task API routes

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TS server");
});

app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
