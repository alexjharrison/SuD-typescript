const socket = require('socket.io');

export default (server, game) => {
  const io = socket(server);
  io.on('connection', function(socket) {
    // Send game info on bootup
    console.log('somebody connected');
    io.emit('UPDATE_GAME', game);

    // Player added to the game
    socket.on('PLAYER_CREATED', name => {
      game.addPlayer(name);
      io.emit('UPDATE_GAME', game);
    });

    // Tile picked from the board
    socket.on('TILE_PICKED', ({ playerNum, tileId }) => {
      game.tilePicked({ playerNum, tileId });
      io.emit('UPDATE_GAME', game);
    });

    // Tile placed on board
    socket.on('TILE_PLACED', ({ playerNum, rowId }) => {
      game.tilePlaced({ playerNum, rowId });
      io.emit('UPDATE_GAME', game);
    });

    socket.on('NEW_CHAT', ({ playerNum, message }) => {
      game.newChat({ playerNum, message });
      io.emit('UPDATE_GAME', game);
    });
  });
};
