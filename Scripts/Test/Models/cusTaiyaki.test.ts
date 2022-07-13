import { CustardTaiyaki } from '../../Models/cusTaiyaki.js';
import taiyakiKind from '../../Types/kind.js';
import Size from '../../Types/size.js';

describe('cusTaiyakiTest', () => {
  test('propertyTest', () => {
    let taiyaki = new CustardTaiyaki(Size.S);

    // 種類の確認
    expect(taiyaki.kind).toBe(taiyakiKind.Custard);
    // 商品名の確認
    expect(taiyaki.name).toBe('カスタード');
    // 中身の確認
    expect(taiyaki.content).toBe('カスタード');
    // サイズの確認(S)
    expect(taiyaki.size).toBe(Size.S);
    // サイズの確認(M)
    taiyaki = new CustardTaiyaki(Size.M);
    expect(taiyaki.size).toBe(Size.M);
    // サイズの確認(L)
    taiyaki = new CustardTaiyaki(Size.L);
    expect(taiyaki.size).toBe(Size.L);
  });

  test('setSizeTest', () => {
    let taiyaki = new CustardTaiyaki(Size.S);

    // サイズの確認(変更前)
    expect(taiyaki.size).toBe(Size.S);
    // Mへの変更
    taiyaki.size = Size.M;
    expect(taiyaki.size).toBe(Size.M);
    // Lへの変更
    taiyaki.size = Size.L;
    expect(taiyaki.size).toBe(Size.L);
  });

  test('getPriceTest', () => {
    let taiyaki = new CustardTaiyaki(Size.S);
    // Sサイズ
    expect(taiyaki.getPrice()).toBe(150);
    // Mサイズ
    taiyaki.size = Size.M;
    expect(taiyaki.getPrice()).toBe(200);
    // Lサイズ
    taiyaki.size = Size.L;
    expect(taiyaki.getPrice()).toBe(250);
  });
});
