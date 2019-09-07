import { BoardRow, PenaltyRow, Grid } from './';

export default class PlayerBoard {
  readonly id: number;
  readonly name: string;
  private boardRows: BoardRow[] = [];
  private penaltyRow: PenaltyRow = new PenaltyRow();
  private grid: Grid = new Grid();

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    for (let i = 1; i <= 5; i++) {
      this.boardRows.push(new BoardRow(i));
    }
  }
}
