const http = require("http");
const express = require("express");
const hostname = "localhost";
const port = 5000;
const app = express();
const articleRouter = require("./articleRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/article", articleRouter);


const server = http.createServer(app);
server.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}/`),
);