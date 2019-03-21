const express = require("express");
const emps = require("./employees-json-example");
const fuzzysort = require("fuzzysort");
const path = require("path");
const router = express.Router();

const app = express();

router.get("/", (req, res) => {
  // console.log(emps.length);
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/search/:term", (req, res) => {
  let searchitem = req.params.term;
  const results = fuzzysort.go(searchitem, emps, {
    key: "name",
    limit: 10,
    allowTypo: true
  });
  res.send(results);
});

app.use("/", router);
app.listen(3000, () =>
  console.log(`Example app listening on port http://localhost:3000`)
);
