import express from "express";
import { Cat, CatType } from "./app.model";

const app = express();
const port = 8000;
//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware");
  next();
});

//* json middleware
app.use(express.json());

//* READ 고양이 전체 데이터 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;

    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
  const cats = Cat;
});

//* READ 특정 고양이 데이터 조회
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log("params", params);
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });

    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* CREATE 새로운 고양이 추가 api
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log("data", data);
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* 404 middleware
app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
