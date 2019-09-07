import { Game, Tile, PlayerBoard } from './models';
import * as socket from 'socket.io';

export default (server, game: Game) => {
  const io: any = socket(server);
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
    socket.on('TILE_PICKED', (tile: Tile) => {
      game.tilePicked(tile);
      io.emit('UPDATE_GAME', game);
    });

    // Tile placed on board
    socket.on('TILE_PLACED', (playerBoard: PlayerBoard, rowId: number) => {
      game.tilePlaced(playerBoard, rowId);
      io.emit('UPDATE_GAME', game);
    });

    // socket.on('NEW_CHAT', ({ playerNum, message }) => {
    //   game.newChat({ playerNum, message });
    //   io.emit('UPDATE_GAME', game);
    // });
  });
};
