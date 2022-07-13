import { Taiyaki } from './taiyaki';
import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';

export class DeluxeTaiyaki implements Taiyaki {
  private readonly ABNORMAL_VALUE_ERROR: string = 'The value is abnormal';
  private _kind: taiyakiKind = taiyakiKind.Deluxe;
  private _name: string = 'デラックスたい焼き';
  private _content: string = '生クリームとカスタード';
  constructor(private _size: Size) {
    if (this.checkDxSize(this._size)) {
      throw new Error(this.ABNORMAL_VALUE_ERROR);
    }
  }

  get kind() {
    return this._kind;
  }

  get name() {
    return this._name;
  }

  get content() {
    return this._content;
  }

  get size() {
    return this._size;
  }

  set size(value: Size) {
    if (this.checkDxSize(value)) {
      throw new Error(this.ABNORMAL_VALUE_ERROR);
    }
    this._size = value;
  }

  getPrice(): number {
    return 300;
  }

  private checkDxSize(target: Size): boolean {
    return target !== Size.L;
  }
}
