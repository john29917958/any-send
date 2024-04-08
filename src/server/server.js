const express = require("express");
const indexRouter = require("./routes/index");

const app = new express();

app.use("/", indexRouter);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
