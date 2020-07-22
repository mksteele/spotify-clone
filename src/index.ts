import express from "express";
import { PORT } from "./config/constants";

const app = express();

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world2!");
});

// start the Express server
app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${PORT}`);
});
