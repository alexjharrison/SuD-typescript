import { Tile } from './';

const colors = ['blue', 'orange', 'red', 'black', 'teal'];

type Slot = {
  tile: Tile;
  validColor: 'string';
};

export default class Grid {
  private slots: Slot[][] = this.initGrid();

  initGrid(): Slot[][] {
    let grid = Array(5).fill(Array(5).fill(null));
    colors.forEach((color, i) => {
      let x = i;
      for (let y = 0; y < 5; y++) {
        grid[y][x] = { color, tile: null };
        x = x < 4 ? x + 1 : 0;
      }
    });
    return grid;
  }
}
