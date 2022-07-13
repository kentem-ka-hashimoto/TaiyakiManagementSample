import taiyakiKind from '../Types/kind.js';
import taiyakiSize from '../Types/size.js';
import { Global } from '../Models/global.js';
import { Taiyaki } from '../Models/taiyaki.js';

// アラートメッセージ
const ILLEGAL_CHOICE: string = `デラックスたい焼きは、'大'しか選択できません。`;

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
    const size: taiyakiSize | undefined = checkSize();
    // デラックスのサイズ確認とアラート表示
    try {
      if (size !== undefined) {
        if (size !== Global.taiyakiMg.taiyakiArr[index].size) {
          Global.taiyakiMg.taiyakiArr[index].size = size;
        }
      }
      localStorage.setItem('taiyakiDate', JSON.stringify(Global.taiyakiMg.taiyakiArr));
      window.location.href = 'main.html';
    } catch {
      alert(ILLEGAL_CHOICE);
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
    const size: taiyakiSize | undefined = checkSize();
    // デラックスのサイズ確認とアラート表示
    try {
      if (size !== undefined) {
        if (usuBtn.checked) {
          taiyaki = Global.taiyakiMg.createTaiyaki(taiyakiKind.Usually, size);
        } else if (cusBtn.checked) {
          taiyaki = Global.taiyakiMg.createTaiyaki(taiyakiKind.Custard, size);
        } else {
          taiyaki = Global.taiyakiMg.createTaiyaki(taiyakiKind.Deluxe, size);
        }
      }
      addLocalStorage(taiyaki);
      window.location.href = 'main.html';
    } catch {
      alert(ILLEGAL_CHOICE);
    }
  });
}

// キャンセルボタンの処理
cancelBtn.addEventListener('click', () => {
  window.location.href = 'main.html';
});

// サイズのチェックを行う関数
export function checkSize(): taiyakiSize | undefined {
  if (lBtn.checked) return taiyakiSize.L;
  if (mBtn.checked) return taiyakiSize.M;
  if (sBtn.checked) return taiyakiSize.S;
}

// ローカルストレージへの保存
function addLocalStorage(taiyaki: Taiyaki): void {
  Global.getLocalStorage();
  Global.taiyakiMg.add(taiyaki);
  localStorage.setItem('taiyakiDate', JSON.stringify(Global.taiyakiMg.taiyakiArr));
}

// ラジオボタンの初期値と有効無効の判定
function setRadioBtnDisabled(): void {
  menuDiv.classList.add('disabled');
  const kind: taiyakiKind = Global.taiyakiMg.taiyakiArr[index].kind;
  const size: taiyakiSize = Global.taiyakiMg.taiyakiArr[index].size;
  usuBtn.checked = kind === taiyakiKind.Usually;
  cusBtn.checked = kind === taiyakiKind.Custard;
  dxBtn.checked = kind === taiyakiKind.Deluxe;
  lBtn.checked = size === taiyakiSize.L;
  mBtn.checked = size === taiyakiSize.M;
  sBtn.checked = size === taiyakiSize.S;
  usuBtn.disabled = true;
  cusBtn.disabled = true;
  dxBtn.disabled = true;
}