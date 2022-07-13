import { CustardTaiyaki } from '../../Models/custardTaiyaki';
import taiyakiKind from '../../Types/kind.js';
import taiyakiSize from '../../Types/size.js';

describe('cusTaiyakiTest', () => {
  test('propertyTest', () => {
    let taiyaki = new CustardTaiyaki(taiyakiSize.S);

    // 種類の確認
    expect(taiyaki.kind).toBe(taiyakiKind.Custard);
    // 商品名の確認
    expect(taiyaki.name).toBe('カスタード');
    // 中身の確認
    expect(taiyaki.content).toBe('カスタード');
    // サイズの確認(S)
    expect(taiyaki.size).toBe(taiyakiSize.S);
    // サイズの確認(M)
    taiyaki = new CustardTaiyaki(taiyakiSize.M);
    expect(taiyaki.size).toBe(taiyakiSize.M);
    // サイズの確認(L)
    taiyaki = new CustardTaiyaki(taiyakiSize.L);
    expect(taiyaki.size).toBe(taiyakiSize.L);
  });

  test('setSizeTest', () => {
    let taiyaki = new CustardTaiyaki(taiyakiSize.S);

    // サイズの確認(変更前)
    expect(taiyaki.size).toBe(taiyakiSize.S);
    // Mへの変更
    taiyaki.size = taiyakiSize.M;
    expect(taiyaki.size).toBe(taiyakiSize.M);
    // Lへの変更
    taiyaki.size = taiyakiSize.L;
    expect(taiyaki.size).toBe(taiyakiSize.L);
  });

  test('getPriceTest', () => {
    let taiyaki = new CustardTaiyaki(taiyakiSize.S);
    // Sサイズ
    expect(taiyaki.getPrice()).toBe(150);
    // Mサイズ
    taiyaki.size = taiyakiSize.M;
    expect(taiyaki.getPrice()).toBe(200);
    // Lサイズ
    taiyaki.size = taiyakiSize.L;
    expect(taiyaki.getPrice()).toBe(250);
  });
});
