import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';
import { Global } from './Global.js';
import { Taiyaki } from './taiyaki.js';
import { TaiyakiManager } from './taiyakiManager.js';

// 購入ボタンの取得
const purchaseBtn = document.getElementById('purchase') as HTMLButtonElement;
// キャンセルボタンの取得
const cancelBtn = document.getElementById('cancel') as HTMLButtonElement;
// メニューdivの取得
const menuDiv = document.getElementById('menu') as HTMLDivElement;
// indexの取得
const kind = Number(localStorage.getItem('kind'));
// 追加か編集か
const role: string | null = localStorage.getItem('role');

// メニューラジオボタンの取得
const menuBtns: NodeListOf<HTMLElement> = document.getElementsByName('kind');

for (let i = 0; i < menuBtns.length; i++) {}
const usuBtn = menuBtns[0] as HTMLInputElement;
const cusBtn = menuBtns[1] as HTMLInputElement;
const dxBtn = menuBtns[2] as HTMLInputElement;

// if (role && role === 'edit') {
//   menuDiv.classList.add('disabled');
//   usuBtn.disabled = true;
//   usuBtn.checked = kind === taiyakiKind.Usually;
//   cusBtn.disabled = true;
//   cusBtn.checked = kind === taiyakiKind.Custard;
//   dxBtn.disabled = true;
//   dxBtn.checked = kind === taiyakiKind.Deluxe;
// }

// サイズラジオボタンの取得
const sizeBtns: NodeListOf<HTMLElement> = document.getElementsByName('size');
const lBtn = sizeBtns[0] as HTMLInputElement;
const mBtn = sizeBtns[1] as HTMLInputElement;
const sBtn = sizeBtns[2] as HTMLInputElement;

if (role && role === 'add') {
  usuBtn.checked = true;
  lBtn.checked = true;
}
// 購入ボタンの処理
let taiyaki: Taiyaki;
purchaseBtn.addEventListener('click', () => {
  const size: Size | undefined = checkSize();
  if (size !== undefined) {
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
  if (lBtn.checked) return Size.L;
  if (mBtn.checked) return Size.M;
  if (sBtn.checked) return Size.S;
}

function addLocalStorage(taiyaki: Taiyaki): void {
  Global.getLocalStorage();
  Global.taiyakiArrMg.add(taiyaki);
  localStorage.setItem('taiyakiDate', JSON.stringify(Global.taiyakiArrMg.taiyakiArr));
}
