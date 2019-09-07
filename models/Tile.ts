export default class Tile {
  readonly color: string;
  readonly id: number;

  constructor(color: string, id: number) {
    this.color = color;
    this.id = id;
  }
}
