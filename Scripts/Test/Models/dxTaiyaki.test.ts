import { DeluxeTaiyaki } from '../../Models/deluxeTaiyaki';
import taiyakiKind from '../../Types/kind.js';
import taiyakiSize from '../../Types/size.js';

describe('dxTaiyakiTest', () => {
  test('propertyTest', () => {
    let taiyaki = new DeluxeTaiyaki(taiyakiSize.L);

    // 種類の確認
    expect(taiyaki.kind).toBe(taiyakiKind.Deluxe);
    // 商品名の確認
    expect(taiyaki.name).toBe('デラックスたい焼き');
    // 中身の確認
    expect(taiyaki.content).toBe('生クリームとカスタード');
    // サイズの確認
    expect(taiyaki.size).toBe(taiyakiSize.L);
  });

  test('propertyErrorTest', () => {
    let taiyaki: DeluxeTaiyaki;
    // Sサイズ
    expect(() => (taiyaki = new DeluxeTaiyaki(taiyakiSize.S))).toThrowError('The value is abnormal');
    // Mサイズ
    expect(() => (taiyaki = new DeluxeTaiyaki(taiyakiSize.M))).toThrowError('The value is abnormal');
  });

  test('setSizeErrorTest', () => {
    let taiyaki = new DeluxeTaiyaki(taiyakiSize.L);

    // サイズの確認(変更前)
    expect(taiyaki.size).toBe(taiyakiSize.L);
    // Mへの変更
    expect(() => (taiyaki.size = taiyakiSize.M)).toThrowError('The value is abnormal');
    // Sへの変更
    expect(() => (taiyaki.size = taiyakiSize.S)).toThrowError('The value is abnormal');
  });

  test('getPriceTest', () => {
    let taiyaki = new DeluxeTaiyaki(taiyakiSize.L);
    expect(taiyaki.getPrice()).toBe(300);
  });
});
