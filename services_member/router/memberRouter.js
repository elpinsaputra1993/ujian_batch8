const express = require("express");
const bodyParser = require("body-parser");
const memberController = require("../controller/memberController");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

const memberRouter = express.Router();
memberRouter
  .route("/")
  .post(urlencodedParser, memberController.addMember)
  .get(memberController.getAllMember);

memberRouter
  .route("/:id")
  .get(memberController.getAllDataMemberById)
  .patch(urlencodedParser, memberController.updateDataMemberById)
  .delete(memberController.deleteDataMemberById);

memberRouter
  .route("/:atrib/:val")
  .get(memberController.getAllDataMemberByDinamis);

module.exports = memberRouter;
