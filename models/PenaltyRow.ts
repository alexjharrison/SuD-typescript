import { Tile } from './';

type Slot = {
  tile: Tile;
  value: number;
};

export default class PenaltyRow {
  private slots: Slot[];

  constructor() {
    const vals = [1, 1, 2, 2, 2, 3, 3];
    this.slots = vals.map(val => ({ tile: null, value: val }));
  }

  // accepts tile
  // returns tile if full
  addTile(tile: Tile): Tile {
    for (let i = 0; i < this.slots.length; i++) {
      if (!this.slots[i].tile) {
        this.slots[i].tile = tile;
        return;
      }
    }
    return tile;
  }

  // returns score of penalty row
  score(): number {
    return this.slots.reduce(
      (acc, { tile, value }) => acc + (tile ? value : 0),
      0
    );
  }

  // removes tiles from row
  // returns tiles to send to discard
  reset(): Tile[] {
    const tilesToDiscard: Tile[] = [];
    this.slots.forEach((slot, i) => {
      tilesToDiscard.push(slot.tile);
      this.slots[i] = { tile: null, value: slot.value };
    });
    return tilesToDiscard;
  }
}
