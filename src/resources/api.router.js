import express  from  'express';

import userRouter from './user/user.router'
import songRouter from './song/song.router'
import playlistRouter from './playlist/playlist.router'

const apiRouter = express.Router();


apiRouter.use('/user', userRouter);
apiRouter.use('/song', songRouter);
apiRouter.use('/playlist', playlistRouter);

export default apiRouter;