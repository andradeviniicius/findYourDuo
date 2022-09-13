import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  console.log("Ads dowjdson");
});

app.listen(3333);
