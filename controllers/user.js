const User = require("../models/user");
const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

// const { userById } = require("../controllers/user");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found"
      });
    }
    req.profile = user;
    next();
  });
};

// router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
//   res.json({
//     user: req.profile
//   });
// });

// router.param("userId", userById);

// module.exports = router;
