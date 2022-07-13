import taiyakiKind from '../Types/taiyakiKind.js';
import taiyakiSize from '../Types/taiyakiSize.js';
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
const isEditMode: boolean = url.searchParams.get('mode') === 'edit';

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
if (isEditMode) {
  Global.getLocalStorage();
  setRadioBtnDisabled();
  // 購入ボタン
  purchaseBtn.addEventListener('click', () => {
    const size: taiyakiSize | undefined = checkSize();
    // デラックスのサイズ確認とアラート表示
    try {
      if (size !== undefined) {
        if (size !== Global.taiyakiManager.taiyakiArr[index].size) {
          Global.taiyakiManager.taiyakiArr[index].size = size;
        }
      }
      localStorage.setItem('taiyakiData', JSON.stringify(Global.taiyakiManager.taiyakiArr));
      RedirectMainPage();
    } catch {
      alert(ILLEGAL_CHOICE);
    }
  });
}

if (!isEditMode) {
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
          taiyaki = Global.taiyakiManager.createTaiyaki(taiyakiKind.Usually, size);
        } else if (cusBtn.checked) {
          taiyaki = Global.taiyakiManager.createTaiyaki(taiyakiKind.Custard, size);
        } else {
          taiyaki = Global.taiyakiManager.createTaiyaki(taiyakiKind.Deluxe, size);
        }
      }
      addLocalStorage(taiyaki);
      RedirectMainPage();
    } catch {
      alert(ILLEGAL_CHOICE);
    }
  });
}

// キャンセルボタンの処理
cancelBtn.addEventListener('click', () => {
  RedirectMainPage();
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
  Global.taiyakiManager.add(taiyaki);
  localStorage.setItem('taiyakiData', JSON.stringify(Global.taiyakiManager.taiyakiArr));
}

// ラジオボタンの初期値と有効無効の判定
function setRadioBtnDisabled(): void {
  menuDiv.classList.add('disabled');
  const kind: taiyakiKind = Global.taiyakiManager.taiyakiArr[index].kind;
  const size: taiyakiSize = Global.taiyakiManager.taiyakiArr[index].size;
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

// メイン画面遷移
function RedirectMainPage(): void {
  window.location.href = 'main.html';
}
