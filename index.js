const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");

const port = 3001;
const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.send("check health ok");
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
