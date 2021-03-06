var express = require("express");
var router = express.Router();


var loginRequired = require("../middlewares/auth").loginRequired;


router.route("/")
  .all(function(req, res, next) {
    console.log("hello HTTP Method");
    next();
  })
  .get(function(req, res, next) {
    return res.json(req.query);
  })
  .post(loginRequired(), function(req, res, next) {
    return res.json(req.body);
  })
  .patch(function(req, res, next) {
    return res.send("PATCH");
  })
  .delete(function(req, res, next) {
    return res.send("DELETE");
  });





module.exports = router;
