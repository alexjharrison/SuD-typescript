import { Tile, PlayerBoard } from './';
import { getById } from '../utils';

export default class Game {
  private allTiles: Tile[] = this.createTiles();

  // tile locations
  private bagTiles: Tile[] = [...this.allTiles];
  private pot: Tile[] = [new Tile('one', 100)];
  private circles: Tile[][] = [[], [], [], [], []];
  private discard: Tile[] = [];

  // game status
  private playerBoards: PlayerBoard[] = [];
  private turn: number = 0;
  private selectedTile: Tile = null;
  private isLastRound: boolean = false;
  private winner: number = null;

  // add player
  addPlayer(name: string): void {
    const numPlayers: number = this.playerBoards.length;
    if (numPlayers > 4) return;
    this.playerBoards.push(new PlayerBoard(numPlayers, name));
    if (numPlayers > 2) {
      this.circles.push([]);
      this.circles.push([]);
    }
  }

  tilePicked(tile: Tile): void {
    this.selectedTile = tile;
  }
  tilePlaced(playerBoard: PlayerBoard, rowId: number): void {}

  createTiles(): Tile[] {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      const color =
        i < 20
          ? 'red'
          : i < 40
          ? 'blue'
          : i < 60
          ? 'teal'
          : i < 80
          ? 'orange'
          : 'black';
      arr.push(new Tile(color, i));
    }
    return arr;
  }

  getPlayerBoardById(allBoards: PlayerBoard[], id: number): PlayerBoard {
    return getById(allBoards, id);
  }
  getTileById(allTiles: Tile[], id: number): Tile {
    return getById(allTiles, id);
  }
}
