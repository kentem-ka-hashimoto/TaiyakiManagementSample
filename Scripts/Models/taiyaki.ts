import taiyakiKind from '../Types/taiyakiKind.js';
import taiyakiSize from '../Types/taiyakiSize.js';

export interface Taiyaki {
  // サイズ(取得と更新可)
  get size(): taiyakiSize;
  set size(value: taiyakiSize);
  // 商品名
  get name(): string;
  // 中身
  get content(): string;
  // 種類
  get kind(): taiyakiKind;
  // 価格の判定
  getPrice(): number;
}
