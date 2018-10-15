import express  from  'express';
import userController from './user.controller'

const userRouter = express.Router();

userRouter.param('id', userController.findById);

userRouter.route('/')
          .get(userController.findAll)
          .post(userController.createOne)

userRouter.route('/:id')
          .get(userController.findOne)
          .put(userController.updateOne)
          .delete(userController.deleteOne)

export default userRouter;