const app = require("express");
const router = app.Router();

router.get("/contact", (req, res) => {
    res.render("contact");
});

module.exports = router;
