import { NormalTaiyaki } from '../../Models/normalTaiyaki';
import taiyakiKind from '../../Types/kind.js';
import taiyakiSize from '../../Types/size.js';

describe('usuTaiyakiTest', () => {
  test('propertyTest', () => {
    let taiyaki = new NormalTaiyaki(taiyakiSize.S);

    // 種類の確認
    expect(taiyaki.kind).toBe(taiyakiKind.Usually);
    // 商品名の確認
    expect(taiyaki.name).toBe('通常たい焼き');
    // 中身の確認
    expect(taiyaki.content).toBe('あんこ');
    // サイズの確認(S)
    expect(taiyaki.size).toBe(taiyakiSize.S);
    // サイズの確認(M)
    taiyaki = new NormalTaiyaki(taiyakiSize.M);
    expect(taiyaki.size).toBe(taiyakiSize.M);
    // サイズの確認(L)
    taiyaki = new NormalTaiyaki(taiyakiSize.L);
    expect(taiyaki.size).toBe(taiyakiSize.L);
  });

  test('setSizeTest', () => {
    let taiyaki = new NormalTaiyaki(taiyakiSize.S);

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
    let taiyaki = new NormalTaiyaki(taiyakiSize.S);
    // Sサイズ
    expect(taiyaki.getPrice()).toBe(100);
    // Mサイズ
    taiyaki.size = taiyakiSize.M;
    expect(taiyaki.getPrice()).toBe(150);
    // Lサイズ
    taiyaki.size = taiyakiSize.L;
    expect(taiyaki.getPrice()).toBe(200);
  });
});
