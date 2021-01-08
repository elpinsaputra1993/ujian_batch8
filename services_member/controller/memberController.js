const Members = require("../model/memberModel");

///Users
exports.addMember = (req, res) => {
  let { name, email, phone, address } = req.body;

  let member = new Members({
    name: name,
    email: email,
    phone: phone,
    address: address,
  });

  member
    .save()
    .then((doc) => {
      res.status(200).send("Berhasil memasukan data " + doc);
    })
    .catch((err) => {
      res.status(500).send("Gagal Insert Data " + err);
    });
};

exports.getAllMember = async (req, res) => {
  let dataHasil = await Members.find();
  res.status(200).json({
    status: "success",
    dataLength: dataHasil.length,
    timestamp: req.requestTime,
    data: dataHasil,
  });
};

exports.getAllDataMemberById = async (req, res) => {
  let idx = req.params.id;

  let dataHasil = await Members.find({ nama: { $regex: idx, $options: "i" } });
  res.status(200).json({
    status: "success",
    dataLength: dataHasil.length,
    timestamp: req.requestTime,
    data: dataHasil,
  });
};

exports.getAllDataMemberByDinamis = async (req, res) => {
  let val = req.params.val;
  let atr = req.params.atrib;
  let coba = { atr: val };

  let parmObject = {};
  parmObject[atr] = { $regex: val, $options: "i" };
  let dataHasil = await Members.find({ [atr]: { $regex: val, $options: "i" } });
  res.status(200).json({
    status: "success",
    dataLength: dataHasil.length,
    timestamp: req.requestTime,
    data: dataHasil,
  });

  // res.json(dataHasil);
  // let dataHasil = await Members.find({}).select({ atr: val });

  // dataHasil.exec(function (err, someValue) {
  //   if (err) return next(err);
  //   res.send(someValue);
  //   // res.status(200).json({
  //   //   status: "success",
  //   //   dataLength: someValue.length,
  //   //   timestamp: req.requestTime,
  //   //   data: someValue,
  //   // });
  // });
};

exports.updateDataMemberById = async (req, res) => {
  console.log(req.body);
  await Members.findByIdAndUpdate(
    req.params.id,
    req.body,
    function (err, docs) {
      if (err) {
        console.log(err);
        res.status(400).json(err);
      } else {
        console.log("Updated User : ", docs);
        res.status(200).json(docs);
      }
    }
  );
};

exports.deleteDataMemberById = async (req, res) => {
  await Members.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log("Deleted User : ", docs);
      res.status(200).json(docs);
    }
  });
};
