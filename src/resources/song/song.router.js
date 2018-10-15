import express  from  'express';
import songController from './song.controller'

const songRouter = express.Router();

songRouter.param('id', songController.findById);

songRouter.route('/')
          .get(songController.findAll)
          .post(songController.createOne)

songRouter.route('/:id')
          .get(songController.findOne)
          .put(songController.updateOne)
          .delete(songController.deleteOne)

export default songRouter;