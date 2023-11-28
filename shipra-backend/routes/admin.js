const express = require("express");
const router = express.Router();

const multer = require("multer");
// const { getUrl } = require("../controllers/getUrl");
const apis = require("../apis");
const upload = multer({ dest: "/tmp/" });

router.post("/createUrl", upload.single("media"), (req, res) => {
    apis.getUrl(req,res)
});

module.exports = router;