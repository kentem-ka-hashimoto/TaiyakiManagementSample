import { Global } from './Models/Global.js';
import taiyakiKind from './Types/kind.js';
import Size from './Types/size.js';

// tbodyの取得
const tbody: HTMLTableSectionElement | null = document.querySelector('tbody');
// 合計金額の表示部分の取得
let totalPrice: HTMLElement | null = document.getElementById('totalPrice');
// 追加ボタンの取得
const addBtn = document.getElementById('add') as HTMLButtonElement;
// 削除ボタンの取得
const deleteBtn = document.getElementById('delete') as HTMLButtonElement;
// 編集ボタンの取得
const editBtn = document.getElementById('edit') as HTMLButtonElement;
// 終了ボタンの取得
const endBtn = document.getElementById('close') as HTMLButtonElement;
// チェックボックスの取得
let checks: NodeListOf<HTMLInputElement>;

// 画面ロード時の処理
window.onload = function () {
  createListView();
  setTotalPrice();
  disabledCheck();
};

// 追加ボタンの処理
addBtn.addEventListener('click', () => {
  localStorage.setItem('role', 'add');
  window.location.href = 'selection.html';
});

// 削除ボタンの処理
deleteBtn.addEventListener('click', () => {
  checks = document.querySelectorAll('input');
  for (let i = checks.length - 1; i >= 0; i--) {
    if (checks[i].checked) {
      Global.taiyakiArrMg.remove(i);
      localStorage.setItem('taiyakiDate', JSON.stringify(Global.taiyakiArrMg.taiyakiArr));
    }
  }
  location.reload();
});

// 編集ボタンの処理
editBtn.addEventListener('click', () => {
  checks = document.querySelectorAll('input');
  checks.forEach((check, index) => {
    if (check.checked) localStorage.setItem('index', `${index}`);
  });
  localStorage.setItem('role', 'edit');
  window.location.href = 'selection.html';
});

// 終了ボタンの処理
endBtn.addEventListener('click', () => {
  window.close();
  if (!window.closed) {
    alert('閉じるのに失敗しました。直接このタブを閉じて下さい。');
  }
});

// 合計金額の取得
function setTotalPrice(): void {
  if (totalPrice) {
    totalPrice.textContent = `合計金額 : ${Global.taiyakiArrMg.getTotalPrice()}円`;
  }
}

// リストの削除
function deleteList() {
  while (tbody?.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

// 項目リストの作成
function createListView(): void {
  deleteList();
  Global.getLocalStorage();
  Global.taiyakiArrMg.taiyakiArr.forEach((taiyaki) => {
    // チェックボックス
    const checkBox: HTMLInputElement = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', () => {
      disabledCheck();
    });
    const tdOfCheck: HTMLTableCellElement = document.createElement('td');
    tdOfCheck.id = 'check';
    tdOfCheck.appendChild(checkBox);
    // 種類
    const tdOfKind: HTMLTableCellElement = document.createElement('td');
    tdOfKind.textContent = taiyaki.name;
    // 中身(具材)
    const tdOfContent: HTMLTableCellElement = document.createElement('td');
    tdOfContent.textContent = taiyaki.content;
    // サイズ
    const tdOfSize: HTMLTableCellElement = document.createElement('td');
    if (taiyaki.size === Size.S) tdOfSize.textContent = '小';
    if (taiyaki.size === Size.M) tdOfSize.textContent = '中';
    if (taiyaki.size === Size.L) tdOfSize.textContent = '大';
    // 価格
    const tdOfPrice: HTMLTableCellElement = document.createElement('td');
    tdOfPrice.textContent = `${taiyaki.getPrice()}`;

    // 追加
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.appendChild(tdOfCheck);
    tr.appendChild(tdOfKind);
    tr.appendChild(tdOfContent);
    tr.appendChild(tdOfSize);
    tr.appendChild(tdOfPrice);
    tbody?.appendChild(tr);
  });
}

// 削除ボタンと編集ボタンの有効判定
function disabledCheck() {
  let checkCount: number = 0;
  checks = document.querySelectorAll('input');
  checks.forEach((check) => {
    if (check.checked) checkCount++;
  });
  deleteBtn.disabled = 1 > checkCount;
  editBtn.disabled = 1 !== checkCount;
}
