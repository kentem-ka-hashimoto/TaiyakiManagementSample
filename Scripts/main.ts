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
  const checkBox: HTMLInputElement = document.createElement('input');
  checkBox.type = 'checkbox';
  const tdOfCheck: HTMLTableCellElement = document.createElement('td');
  tdOfCheck.id = 'check';
  tdOfCheck.appendChild(checkBox);
  const tdOfKind: HTMLTableCellElement = document.createElement('td');
  tdOfKind.textContent = '通常たい焼き';
  const tdOfContent: HTMLTableCellElement = document.createElement('td');
  tdOfContent.textContent = 'あんこ';
  const tdOfSize: HTMLTableCellElement = document.createElement('td');
  tdOfSize.textContent = '小';
  const tdOfPrice: HTMLTableCellElement = document.createElement('td');
  tdOfPrice.textContent = '100';

  tbody?.appendChild(tdOfCheck);
  tbody?.appendChild(tdOfKind);
  tbody?.appendChild(tdOfContent);
  tbody?.appendChild(tdOfSize);
  tbody?.appendChild(tdOfPrice);
}
