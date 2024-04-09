const router = require('express').Router();
const userController = require("../controller/userController");
const authMiddlewares = require("../middlewares/auth");

// router.use(authMiddleware);
router.post('/api/v1/user/', userController.create);
router.get('/api/v1/user/', userController.findAll);
router.put('/api/v1/user/:id', userController.update);
router.put('/api/v1/user/:id', userController.update);
router.delete('/api/v1/user/:id', userController.delete);
router.get('/api/v1/user/:id', userController.findOne);

module.exports = router;