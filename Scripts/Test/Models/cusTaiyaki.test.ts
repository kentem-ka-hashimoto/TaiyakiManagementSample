import { CusTaiyaki } from '../../Models/cusTaiyaki.js';
import taiyakiKind from '../../Types/kind.js';
import Size from '../../Types/size.js';

describe('usuTaiyakiTest', () => {
  test('propertyTest', () => {
    let taiyaki = new CusTaiyaki(Size.S);

    expect(taiyaki.kind).toBe(taiyakiKind.Custard);

    expect(taiyaki.content).toBe('カスタード');

    expect(taiyaki.size).toBe(Size.S);
  });

  test('getPriceTest', () => {
    let taiyaki = new CusTaiyaki(Size.S);
    expect(taiyaki.getPrice()).toBe(150);

    taiyaki.size = Size.M;
    expect(taiyaki.getPrice()).toBe(200)

    taiyaki.size = Size.L;
    expect(taiyaki.getPrice()).toBe(250)
  });
});