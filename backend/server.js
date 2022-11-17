import express from "express";
import data from "./data.js";

const app = express();

app.get(`/api/products`, (req, res) => {
  res.send(data.products); // <=== this data is coming from the data in the folder from backend
});

// this is the port for the backend
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
