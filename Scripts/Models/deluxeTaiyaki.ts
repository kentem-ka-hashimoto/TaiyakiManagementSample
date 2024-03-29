import { Taiyaki } from './taiyaki';
import taiyakiKind from '../Types/taiyakiKind.js';
import taiyakiSize from '../Types/taiyakiSize.js';

export class DeluxeTaiyaki implements Taiyaki {
  private readonly ABNORMAL_VALUE_ERROR: string = 'The value is abnormal';
  private _kind: taiyakiKind = taiyakiKind.Deluxe;
  private _content: string = '生クリームとカスタード';
  constructor(private _size: taiyakiSize) {
    if (this.checkDxSize(this._size)) {
      throw new TypeError(this.ABNORMAL_VALUE_ERROR);
    }
  }

  public get kind() {
    return this._kind;
  }

  public get content() {
    return this._content;
  }

  public get size() {
    return this._size;
  }

  public set size(value: taiyakiSize) {
    if (this.checkDxSize(value)) {
      throw new TypeError(this.ABNORMAL_VALUE_ERROR);
    }
    this._size = value;
  }

  public getPrice(): number {
    return 300;
  }

  private checkDxSize(target: taiyakiSize): boolean {
    return target !== taiyakiSize.L;
  }
}
