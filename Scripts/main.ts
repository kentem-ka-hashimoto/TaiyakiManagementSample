import { Global } from './Models/Global.js';
import taiyakiKind from './Types/kind.js';
import Size from './Types/size.js';

// tbodyの取得
const tbody: HTMLTableSectionElement | null = document.querySelector('tbody');
// 終了ボタンの取得
const endBtn = document.getElementById('close') as HTMLButtonElement;
// 追加ボタンの取得
const addBtn = document.getElementById('add') as HTMLButtonElement;
// 編集ボタンの取得
const editBtn = document.getElementById('edit') as HTMLButtonElement;

createListView();

// 追加ボタンの処理
addBtn.addEventListener('click', () => {
  window.location.href = 'selection.html';
});

// 編集ボタンの処理
editBtn.addEventListener('click', () => {
  window.location.href = 'selection.html';
});

// 終了ボタンの処理
endBtn.addEventListener('click', () => {
  window.close();
  if (!window.closed) {
    alert('閉じるのに失敗しました。直接このタブを閉じて下さい。');
  }
});

// 項目リストの作成
function createListView(): void {
  Global.getLocalStorage();
  Global.taiyakiArrMg.taiyakiArr.forEach((taiyaki) => {
    const checkBox: HTMLInputElement = document.createElement('input');
    checkBox.type = 'checkbox';
    const tdOfCheck: HTMLTableCellElement = document.createElement('td');
    tdOfCheck.id = 'check';
    tdOfCheck.appendChild(checkBox);
    const tdOfKind: HTMLTableCellElement = document.createElement('td');
    tdOfKind.textContent = taiyaki.name;
    const tdOfContent: HTMLTableCellElement = document.createElement('td');
    tdOfContent.textContent = taiyaki.content;
    const tdOfSize: HTMLTableCellElement = document.createElement('td');

    if (taiyaki.size === Size.S) {
      tdOfSize.textContent = '小';
    }
    if (taiyaki.size === Size.M) {
      tdOfSize.textContent = '中';
    }
    if (taiyaki.size === Size.L) {
      tdOfSize.textContent = '大';
    }
    const tdOfPrice: HTMLTableCellElement = document.createElement('td');
    tdOfPrice.textContent = taiyaki.getPrice().toString();

    const tr: HTMLTableRowElement = document.createElement('tr');

    tr.appendChild(tdOfCheck);
    tr.appendChild(tdOfKind);
    tr.appendChild(tdOfContent);
    tr.appendChild(tdOfSize);
    tr.appendChild(tdOfPrice);

    tbody?.appendChild(tr);
  });
}
