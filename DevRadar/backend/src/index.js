const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./modules/websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://Andre:4ndr34ndr3@cluster0-k87cc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);