import { Tile } from './';

export default class BoardRow {
  private tiles: Tile[];

  constructor(slots: number) {
    this.tiles = new Array(slots).fill(null);
  }

  isComplete(): boolean {
    return this.tiles.reduce((acc, tile) => acc && !!tile, true);
  }

  // add tile
  // if overflow, returns tile
  addTile(tile: Tile): Tile {
    for (let i = 0; i < this.tiles.length; i++) {
      if (!this.tiles[i]) {
        this.tiles[i] = tile;
        return;
      }
    }
    return tile;
  }

  // Get valid color of current row
  validColor(): string {
    return;
  }
}
