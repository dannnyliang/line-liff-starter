const express = require('express');
const http = require('http');

const app = express();
app.use(express.static('/index.html'));

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server is listening on http://127.0.0.1:${port}`));