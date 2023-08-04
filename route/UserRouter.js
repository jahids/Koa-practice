const Router = require("koa-router");
const { getAllUser, addUser } = require("../controller/UsersController");
const router = new Router();
// const userController = require("../controller/UsersController.js")
// define all route

router.get("/", getAllUser)
router.post('/', addUser)

module.exports = router;