import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';

export interface Taiyaki {
  // サイズ(取得と更新可)
  get size(): Size;
  set size(value: Size);
  // 商品名
  get name(): string;
  // 中身
  get content(): string;
  // 種類
  get kind(): taiyakiKind;
  // 価格の判定
  getPrice(): number;
}
