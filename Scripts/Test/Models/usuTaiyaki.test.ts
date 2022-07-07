import { UsuTaiyaki } from '../../Models/usuTaiyaki.js';
import taiyakiKind from '../../Types/kind.js';
import Size from '../../Types/size.js';

describe('cusTaiyakiTest', () => {
  test('propertyTest', () => {
    let taiyaki = new UsuTaiyaki(Size.S);

    expect(taiyaki.kind).toBe(taiyakiKind.Usually);

    expect(taiyaki.content).toBe('あんこ');

    expect(taiyaki.size).toBe(Size.S);
  });

  test('getPriceTest', () => {
    let taiyaki = new UsuTaiyaki(Size.S);
    expect(taiyaki.getPrice()).toBe(100);

    taiyaki.size = Size.M;
    expect(taiyaki.getPrice()).toBe(150)

    taiyaki.size = Size.L;
    expect(taiyaki.getPrice()).toBe(200)
  });
});
