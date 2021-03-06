import Game from './models/Game';
import socket from './socket';

const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// init game parameters
const game = new Game();
game.addPlayer('alex');

app.get('/', (req, res) => res.send(game));

// start server and host built vue files
app.use(express.static('./client/dist'));
const server: any = app.listen(PORT, () =>
  console.log('Started on port ' + PORT)
);

// hook sockets into server
socket(server, game);
