import { Taiyaki } from '../../Models/taiyaki.js';
import { TaiyakiManager } from '../../Models/taiyakiManager.js';
import taiyakiKind from '../../Types/kind.js';
import Size from '../../Types/size.js';

describe(`taiyakiManagerTest`, () => {
  test('propertyTest', () => {
    let mg = new TaiyakiManager();
    expect(mg.taiyakiArr.length).toBe(0);
  });

  test('addTest', () => {
    let mg = new TaiyakiManager();
    // 何も入っていないことを確認
    expect(mg.taiyakiArr.length).toBe(0);

    // 通常たいやきの追加確認
    let taiyaki: Taiyaki = mg.createTaiyaki(taiyakiKind.Usually, Size.S);
    mg.add(taiyaki);
    // 追加されていることを確認
    expect(mg.taiyakiArr.length).toBe(1);
    // 値の確認
    expect(mg.taiyakiArr[0].kind).toBe(taiyakiKind.Usually);
    expect(mg.taiyakiArr[0].size).toBe(Size.S);
    expect(mg.taiyakiArr[0].content).toBe('あんこ');

    // カスタードたい焼きの追加確認
    taiyaki = mg.createTaiyaki(taiyakiKind.Custard, Size.M);
    mg.add(taiyaki);
    // 追加されていることを確認
    expect(mg.taiyakiArr.length).toBe(2);
    // 値の確認
    expect(mg.taiyakiArr[1].kind).toBe(taiyakiKind.Custard);
    expect(mg.taiyakiArr[1].size).toBe(Size.M);
    expect(mg.taiyakiArr[1].content).toBe('カスタード');

    // デラックスたい焼きの追加確認
    taiyaki = mg.createTaiyaki(taiyakiKind.Deluxe, Size.L);
    mg.add(taiyaki);
    // 追加されていることを確認
    expect(mg.taiyakiArr.length).toBe(3);
    // 値の確認
    expect(mg.taiyakiArr[2].kind).toBe(taiyakiKind.Deluxe);
    expect(mg.taiyakiArr[2].size).toBe(Size.L);
    expect(mg.taiyakiArr[2].content).toBe('生クリームとカスタード');
  });

  test('removeUsuallyTest', () => {
    let mg = new TaiyakiManager();
    let taiyaki: Taiyaki = mg.createTaiyaki(taiyakiKind.Usually, Size.S);
    mg.add(taiyaki);
    taiyaki = mg.createTaiyaki(taiyakiKind.Usually, Size.M);
    mg.add(taiyaki);

    // 削除前の確認
    expect(mg.taiyakiArr.length).toBe(2);
    // 初めを削除
    mg.remove(0);
    expect(mg.taiyakiArr.length).toBe(1);
    // 削除した値が正しいか確認
    expect(mg.taiyakiArr[0].size).toBe(Size.M);
  });

  test('removeCustardTest', () => {
    let mg = new TaiyakiManager();
    let taiyaki: Taiyaki = mg.createTaiyaki(taiyakiKind.Custard, Size.S);
    mg.add(taiyaki);
    taiyaki = mg.createTaiyaki(taiyakiKind.Custard, Size.M);
    mg.add(taiyaki);

    // 削除前の確認
    expect(mg.taiyakiArr.length).toBe(2);
    // 終わりを削除
    mg.remove(1);
    expect(mg.taiyakiArr.length).toBe(1);
    // 削除した値が正しいか確認
    expect(mg.taiyakiArr[0].size).toBe(Size.S);
  });

  test('removeDeluxeTest', () => {
    let mg = new TaiyakiManager();
    let taiyaki: Taiyaki = mg.createTaiyaki(taiyakiKind.Deluxe, Size.L);
    mg.add(taiyaki);
    taiyaki = mg.createTaiyaki(taiyakiKind.Deluxe, Size.L);
    mg.add(taiyaki);

    // 削除前の確認
    expect(mg.taiyakiArr.length).toBe(2);
    // 削除できているかの確認
    mg.remove(0);
    expect(mg.taiyakiArr.length).toBe(1);
  });

  test('getTotalPriceTest', () => {
    let mg = new TaiyakiManager();

    // ０個の場合
    expect(mg.getTotalPrice()).toBe(0);

    // 通常たい焼きの小を追加
    let taiyaki: Taiyaki = mg.createTaiyaki(taiyakiKind.Usually, Size.S);
    mg.add(taiyaki);
    expect(mg.getTotalPrice()).toBe(100);

    // カスタードの中を追加
    taiyaki = mg.createTaiyaki(taiyakiKind.Custard, Size.M);
    mg.add(taiyaki);
    expect(mg.getTotalPrice()).toBe(300);

    // デラックスの大を追加
    taiyaki = mg.createTaiyaki(taiyakiKind.Deluxe, Size.L);
    mg.add(taiyaki);
    expect(mg.getTotalPrice()).toBe(600);
  });
});
