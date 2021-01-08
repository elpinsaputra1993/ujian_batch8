const express = require("express");
const dotenv = require("dotenv");
const mongodb = require("mongoose");

const memberRouter = require("./router/memberRouter");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE_LOCAL;

mongodb
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then((connection) => {
    console.log("Koneksi Berhasil");
  });

const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   console.log(" aku menambahkan timestamp");
//   req.requestTime = new Date().toISOString();
//   next();
// });

app.use("/member", memberRouter);

app.listen(port, () => {
  console.log("Service Terkoneksi");
});
