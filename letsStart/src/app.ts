import express from "express";
import { Cat, CatType } from "./app.model";

const app = express();
const port = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
