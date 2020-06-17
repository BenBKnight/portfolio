const app = require("express");
const router = app.Router();

const home = require("./home.route");

router.use('/', home);

module.exports = router;
