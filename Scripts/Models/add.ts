import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';
import { Global } from './Global.js';
import { Taiyaki } from './taiyaki.js';

// 購入ボタンの取得
const purchaseBtn = document.getElementById('purchase') as HTMLButtonElement;
// キャンセルボタンの取得
const cancelBtn = document.getElementById('cancel') as HTMLButtonElement;
// メニューdivの取得
const menuDiv = document.getElementById('menu') as HTMLDivElement;
// indexの取得
const index = Number(localStorage.getItem('index'));
// クエリパラメータの取得
const url = new URL(window.location.href);

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

// 追加か編集かの判定
if (url.searchParams.get('mode') === 'edit') {
  Global.getLocalStorage();
  setRadioBtnDisabled();
  // 購入ボタン
  purchaseBtn.addEventListener('click', () => {
    const size: Size | undefined = checkSize();
    // デラックスのサイズ確認とアラート表示
    try {
      if (size !== undefined) {
        if (size !== Global.taiyakiArrMg.taiyakiArr[index].size) {
          Global.taiyakiArrMg.taiyakiArr[index].size = size;
        }
      }
      localStorage.setItem('taiyakiDate', JSON.stringify(Global.taiyakiArrMg.taiyakiArr));
      window.location.href = 'main.html';
    } catch {
      alert(`デラックスたい焼きは、'大'しか選択できません。`);
    }
  });
}

if (url.searchParams.get('mode') === 'add') {
  // 追加処理
  usuBtn.checked = true;
  lBtn.checked = true;
  // 購入ボタン
  let taiyaki: Taiyaki;
  purchaseBtn.addEventListener('click', () => {
    const size: Size | undefined = checkSize();
    // デラックスのサイズ確認とアラート表示
    try {
      if (size !== undefined) {
        if (usuBtn.checked) {
          taiyaki = Global.taiyakiArrMg.createTaiyaki(taiyakiKind.Usually, size);
        } else if (cusBtn.checked) {
          taiyaki = Global.taiyakiArrMg.createTaiyaki(taiyakiKind.Custard, size);
        } else {
          taiyaki = Global.taiyakiArrMg.createTaiyaki(taiyakiKind.Deluxe, size);
        }
      }
      addLocalStorage(taiyaki);
      window.location.href = 'main.html';
    } catch {
      alert(`デラックスたい焼きは、'大'しか選択できません。`);
    }
  });
}

// キャンセルボタンの処理
cancelBtn.addEventListener('click', () => {
  window.location.href = 'main.html';
});

// サイズのチェックを行う関数
export function checkSize(): Size | undefined {
  if (lBtn.checked) return Size.L;
  if (mBtn.checked) return Size.M;
  if (sBtn.checked) return Size.S;
}

// ローカルストレージへの保存
function addLocalStorage(taiyaki: Taiyaki): void {
  Global.getLocalStorage();
  Global.taiyakiArrMg.add(taiyaki);
  localStorage.setItem('taiyakiDate', JSON.stringify(Global.taiyakiArrMg.taiyakiArr));
}

// ラジオボタンの初期値と有効無効の判定
function setRadioBtnDisabled(): void {
  menuDiv.classList.add('disabled');
  const kind: taiyakiKind = Global.taiyakiArrMg.taiyakiArr[index].kind;
  const size: Size = Global.taiyakiArrMg.taiyakiArr[index].size;
  usuBtn.checked = kind === taiyakiKind.Usually;
  cusBtn.checked = kind === taiyakiKind.Custard;
  dxBtn.checked = kind === taiyakiKind.Deluxe;
  lBtn.checked = size === Size.L;
  mBtn.checked = size === Size.M;
  sBtn.checked = size === Size.S;
  usuBtn.disabled = true;
  cusBtn.disabled = true;
  dxBtn.disabled = true;
}
