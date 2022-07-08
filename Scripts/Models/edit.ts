import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';
import { Global } from './Global.js';
import { checkSize } from './selection.js';
import { Taiyaki } from './taiyaki.js';

// 購入ボタンの取得
const purchaseBtn = document.getElementById('purchase') as HTMLButtonElement;
// メニューdivの取得
const menuDiv = document.getElementById('menu') as HTMLDivElement;
// indexの取得
const index = Number(localStorage.getItem('index'));
// 追加か編集か
const role: string | null = localStorage.getItem('role');

// メニューラジオボタンの取得
const menuBtns: NodeListOf<HTMLElement> = document.getElementsByName('kind');

for (let i = 0; i < menuBtns.length; i++) {}
const usuBtn = menuBtns[0] as HTMLInputElement;
const cusBtn = menuBtns[1] as HTMLInputElement;
const dxBtn = menuBtns[2] as HTMLInputElement;

// サイズラジオボタンの取得
const sizeBtns: NodeListOf<HTMLElement> = document.getElementsByName('size');
const lBtn = sizeBtns[0] as HTMLInputElement;
const mBtn = sizeBtns[1] as HTMLInputElement;
const sBtn = sizeBtns[2] as HTMLInputElement;

if (role && role === 'edit') {
  Global.getLocalStorage();
  settingRadioBtn();
  // 購入ボタンの処理
  purchaseBtn.addEventListener('click', () => {
    const size: Size | undefined = checkSize();
    if (size !== undefined) {
      if (size !== Global.taiyakiArrMg.taiyakiArr[index].size) {
        Global.taiyakiArrMg.taiyakiArr[index].size = size;
      }
    }
    localStorage.setItem('taiyakiDate', JSON.stringify(Global.taiyakiArrMg.taiyakiArr));
    window.location.href = 'main.html';
  });
}

function settingRadioBtn(): void {
  menuDiv.classList.add('disabled');
  usuBtn.checked = Global.taiyakiArrMg.taiyakiArr[index].kind === taiyakiKind.Usually;
  cusBtn.checked = Global.taiyakiArrMg.taiyakiArr[index].kind === taiyakiKind.Custard;
  dxBtn.checked = Global.taiyakiArrMg.taiyakiArr[index].kind === taiyakiKind.Deluxe;
  lBtn.checked = Global.taiyakiArrMg.taiyakiArr[index].size === Size.L;
  mBtn.checked = Global.taiyakiArrMg.taiyakiArr[index].size === Size.M;
  sBtn.checked = Global.taiyakiArrMg.taiyakiArr[index].size === Size.S;
  usuBtn.disabled = true;
  cusBtn.disabled = true;
  dxBtn.disabled = true;
}
