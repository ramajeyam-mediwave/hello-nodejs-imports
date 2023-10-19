import express from "express";
import morgan from "morgan";
import config from "./config.js";

const app = express();
app.use(morgan("combined"));

app.use(express.json());

const favs = [];

// reading READ
app.get("/", (req, res) => {
  return res.json({
    data: {
      favs,
    },
  });
});

// add data CREATE
app.post("/", (req, res) => {
  //   console.log("==> ", req.body);
  //   console.log("==> ", req.method);
  //   console.log("==> ", req.headers);
  //   console.log("==> ", req.path);

  favs.push({
    id: new Date().getTime(),
    text: req.body.text,
  });
  return res.json({
    message: "added data",
  });
});

// Update
app.put("/", (req, res) => {
  return res.json({
    message: "PUT route",
  });
});

// DELETE
app.delete("/", (req, res) => {
  return res.json({
    message: "DELETE route",
  });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
