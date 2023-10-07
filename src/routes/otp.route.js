const express = require("express");
const router = express.Router();

const { verify, validate } = require("../usecases/otpVerify.usecases");

router.post("/", async (req, res) => {
  try {
    const ver = await verify(req.body);
    if (ver) {
      res.status(201);
      res.json({
        success: true,
        data: ver,
      });
    } else {
      console.log("error del back");
    }
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/validate", async (req, res) => {
  try {
    const verified = await validate(req.body);
    if (verified) {
      res.status(200);
      res.json({
        success: true,
        data: verified,
      });
    } else {
      console.log("error en la ruta");
    }
  } catch (error) {
    console.log("error de ruta", error.message);
  }
});

module.exports = router;
