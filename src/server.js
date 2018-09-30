const express = require('express');


const app = express();

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {res.json({apiWithRouter: true})});

app.use('/notify', (req, res) => res.json({notify : true}));

app.use('/api', apiRouter);

app.get('/', (req, res) => res.json({first : true}));

//catch all
app.all("*", (req, res) => {
    res.json({default : true});
});


export default app;