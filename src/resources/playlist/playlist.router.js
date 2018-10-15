import express  from  'express';
import playlistController from './playlist.controller'

const playlistRouter = express.Router();

playlistRouter.param('id', playlistController.findById);

playlistRouter.route('/')
          .get(playlistController.findAll)
          .post(playlistController.createOne)

playlistRouter.route('/:id')
          .get(playlistController.findOne)
          .put(playlistController.updateOne)
          .delete(playlistController.deleteOne)

export default playlistRouter;