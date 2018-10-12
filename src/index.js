import http from 'http';

import app from './server';

const server = http.createServer(app);
let currentApp = app;

app.listen('3000', function () {
    console.log('Application is listening on 3000');
});

if (module.hot) {
    console.log('module hot loading is enabled');
    module.hot.accept(['./server'], () => {
        server.removeListener('request', currentApp)
        server.on('request', app)
        currentApp = app
    })
}