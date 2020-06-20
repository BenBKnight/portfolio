const app = require("express");
const router = app.Router();

router.get("/portfolio", (req, res) => {
    res.render("portfolio");
});

module.exports = router;