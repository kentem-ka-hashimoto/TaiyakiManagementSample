import { UsuTaiyaki } from '../../Models/usuTaiyaki.js';
import taiyakiKind from '../../Types/kind.js';
import Size from '../../Types/size.js';

describe('usuTaiyakiTest', () => {
  test('propertyTest', () => {
    let taiyaki = new UsuTaiyaki(Size.S);

    // 種類の確認
    expect(taiyaki.kind).toBe(taiyakiKind.Usually);
    // 商品名の確認
    expect(taiyaki.name).toBe('通常たい焼き');
    // 中身の確認
    expect(taiyaki.content).toBe('あんこ');
    // サイズの確認(S)
    expect(taiyaki.size).toBe(Size.S);
    // サイズの確認(M)
    taiyaki = new UsuTaiyaki(Size.M);
    expect(taiyaki.size).toBe(Size.M);
    // サイズの確認(L)
    taiyaki = new UsuTaiyaki(Size.L);
    expect(taiyaki.size).toBe(Size.L);
  });

  test('setSizeTest', () => {
    let taiyaki = new UsuTaiyaki(Size.S);

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
    let taiyaki = new UsuTaiyaki(Size.S);
    // Sサイズ
    expect(taiyaki.getPrice()).toBe(100);
    // Mサイズ
    taiyaki.size = Size.M;
    expect(taiyaki.getPrice()).toBe(150);
    // Lサイズ
    taiyaki.size = Size.L;
    expect(taiyaki.getPrice()).toBe(200);
  });
});
