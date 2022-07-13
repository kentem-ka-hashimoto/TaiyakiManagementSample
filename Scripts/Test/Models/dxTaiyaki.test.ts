import { DeluxeTaiyaki } from '../../Models/deluxeTaiyaki';
import taiyakiKind from '../../Types/kind.js';
import Size from '../../Types/size.js';

describe('dxTaiyakiTest', () => {
  test('propertyTest', () => {
    let taiyaki = new DeluxeTaiyaki(Size.L);

    // 種類の確認
    expect(taiyaki.kind).toBe(taiyakiKind.Deluxe);
    // 商品名の確認
    expect(taiyaki.name).toBe('デラックスたい焼き');
    // 中身の確認
    expect(taiyaki.content).toBe('生クリームとカスタード');
    // サイズの確認
    expect(taiyaki.size).toBe(Size.L);
  });

  test('propertyErrorTest', () => {
    let taiyaki: DeluxeTaiyaki;
    // Sサイズ
    expect(() => (taiyaki = new DeluxeTaiyaki(Size.S))).toThrowError('The value is abnormal');
    // Mサイズ
    expect(() => (taiyaki = new DeluxeTaiyaki(Size.M))).toThrowError('The value is abnormal');
  });

  test('setSizeErrorTest', () => {
    let taiyaki = new DeluxeTaiyaki(Size.L);

    // サイズの確認(変更前)
    expect(taiyaki.size).toBe(Size.L);
    // Mへの変更
    expect(() => (taiyaki.size = Size.M)).toThrowError('The value is abnormal');
    // Sへの変更
    expect(() => (taiyaki.size = Size.S)).toThrowError('The value is abnormal');
  });

  test('getPriceTest', () => {
    let taiyaki = new DeluxeTaiyaki(Size.L);
    expect(taiyaki.getPrice()).toBe(300);
  });
});
