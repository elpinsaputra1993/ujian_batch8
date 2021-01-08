const mongodb = require("mongoose");

const MemberDB = new mongodb.Schema({
  name: {
    type: String,
    require: [true, "Masukan Nama Anda"],
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

const Members = mongodb.model("member", MemberDB);

module.exports = Members;
