import { DxTaiyaki } from '../../Models/dxTaiyaki.js';
import taiyakiKind from '../../Types/kind.js';
import Size from '../../Types/size.js';

describe('dxTaiyakiTest', () => {
  test('propertyTest', () => {
    let taiyaki = new DxTaiyaki(Size.L);

    expect(taiyaki.kind).toBe(taiyakiKind.Deluxe);

    expect(taiyaki.name).toBe('デラックスたい焼き');

    expect(taiyaki.content).toBe('生クリームとカスタード');

    expect(taiyaki.size).toBe(Size.L);
  });

  test('propertyErrorTest', () => {
    // let taiyaki = new DxTaiyaki(Size.L);
    let taiyaki: DxTaiyaki;
    expect(() => (taiyaki = new DxTaiyaki(Size.S))).toThrowError('The value is abnormal');
    expect(() => (taiyaki = new DxTaiyaki(Size.M))).toThrowError('The value is abnormal');
  });

  test('getPriceTest', () => {
    let taiyaki = new DxTaiyaki(Size.L);
    expect(taiyaki.getPrice()).toBe(300);
  });
});
