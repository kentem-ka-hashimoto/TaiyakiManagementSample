import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';
import { Global } from './Global.js';
import { Taiyaki } from './taiyaki.js';
import { TaiyakiManager } from './taiyakiManager.js';

// 購入ボタンの取得
const purchaseBtn = document.getElementById('purchase') as HTMLButtonElement;
// キャンセルボタンの取得
const cancelBtn = document.getElementById('cancel') as HTMLButtonElement;

// メニューラジオボタンの取得
const menuBtns: NodeListOf<HTMLElement> = document.getElementsByName('kind');
const usuBtn = menuBtns[0] as HTMLInputElement;
const cusBtn = menuBtns[1] as HTMLInputElement;
const dxBtn = menuBtns[2] as HTMLInputElement;

// サイズラジオボタンの取得
const sizeBtns: NodeListOf<HTMLElement> = document.getElementsByName('size');
const lBtn = sizeBtns[0] as HTMLInputElement;
const mBtn = sizeBtns[1] as HTMLInputElement;
const sBtn = sizeBtns[2] as HTMLInputElement;

// 購入ボタンの処理
let taiyaki: Taiyaki;
purchaseBtn.addEventListener('click', () => {
  const size: Size | undefined = checkSize();
  if (size) {
    if (usuBtn.checked) {
      taiyaki = Global.taiyakiArrMg.createTaiyaki(taiyakiKind.Usually, size);
    }
    if (cusBtn.checked) {
      taiyaki = Global.taiyakiArrMg.createTaiyaki(taiyakiKind.Custard, size);
    }
    if (dxBtn.checked) {
      taiyaki = Global.taiyakiArrMg.createTaiyaki(taiyakiKind.Deluxe, size);
    }
  }
  addLocalStorage(taiyaki);
  window.location.href = 'main.html';
});

// キャンセルボタンの処理
cancelBtn.addEventListener('click', () => {
  window.location.href = 'main.html';
});

function checkSize(): Size | undefined {
  if (lBtn) return Size.L;
  if (mBtn) return Size.M;
  if (sBtn) return Size.S;
}

function addLocalStorage(taiyaki: Taiyaki): void {
  Global.getLocalStorage();
  Global.taiyakiArrMg.taiyakiArr.push(taiyaki);
  localStorage.setItem('taiyakiDate', JSON.stringify(Global.taiyakiArrMg.taiyakiArr));
}
