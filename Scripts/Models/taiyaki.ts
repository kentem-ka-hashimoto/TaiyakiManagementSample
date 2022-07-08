import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';

export interface Taiyaki {
  // サイズ(取得と更新可)
  get size(): Size;
  set size(value: Size);
  get name(): string;
  // 中身
  get content(): string;
  // 価格
  // get price(): number;
  // 種類
  get kind(): taiyakiKind;

  getPrice(): number;
}
