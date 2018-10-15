import express from 'express';
import setupMiddleware from './middleware';
import apiRouter from './resources/api.router'

const app = express();

//sets up body parser
setupMiddleware(app);

app.use('/api', apiRouter);

app.use('/notify', (req, res) => res.json({notify : true}));

app.get('/', (req, res) => res.json({first : true}));

//catch all
app.all("*", (req, res) => {
    res.json({default : true});
});


export default app;