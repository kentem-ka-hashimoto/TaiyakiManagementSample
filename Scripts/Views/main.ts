import { Global } from '../Models/global.js';
import taiyakiSize from '../Types/taiyakiSize.js';

// エラーメッセージ
const ABNORMAL_VALUE_ERROR: string = 'The value is abnormal';
// アラートメッセージ
const FAILED_TO_CLOSE: string = '閉じるのに失敗しました。直接このタブを閉じて下さい。';

// tbodyの取得
const tbody: HTMLTableSectionElement | null = document.querySelector('tbody');
// メーターの取得
let meter: HTMLMeterElement | null = document.querySelector('meter');
// 所持金の取得
let possessionMoney: number = Global.getPossessionMoney();
const inputPossessionMoney = document.getElementById('possessionMoney') as HTMLInputElement;
inputPossessionMoney.value = possessionMoney.toString();

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
  // チェックボックスの設定(複数選択させない)
  checks = document.getElementsByName('check') as NodeListOf<HTMLInputElement>;
  checks.forEach((check) => {
    check.addEventListener('change', () => {
      if (check.checked) {
        checks.forEach((check) => {
          check.checked = false;
        });
        check.checked = true;
      }
      disabledCheck();
    });
  });
  disabledCheck();
  updateMeter();
};

// 追加ボタンの処理
addBtn.addEventListener('click', () => {
  window.location.href = 'Add.html?mode=add';
  Global.setPossessionMoney(possessionMoney);
});

// 削除ボタンの処理
deleteBtn.addEventListener('click', () => {
  for (let i = checks.length - 1; i >= 0; i--) {
    if (checks[i].checked) {
      Global.taiyakiManager.remove(i);
      localStorage.setItem('taiyakiData', JSON.stringify(Global.taiyakiManager.taiyakiArr));
    }
  }
  location.reload();
});

// 編集ボタンの処理
editBtn.addEventListener('click', () => {
  checks.forEach((check, index) => {
    if (check.checked) localStorage.setItem('index', `${index}`);
  });
  window.location.href = 'Add.html?mode=edit';
  Global.setPossessionMoney(possessionMoney);
});

// 終了ボタンの処理
endBtn.addEventListener('click', () => {
  window.close();
  if (!window.closed) {
    alert(FAILED_TO_CLOSE);
  }
});

// 所持金入力した際の処理
inputPossessionMoney.addEventListener('input', () => {
  possessionMoney = Number(inputPossessionMoney.value);
  updateMeter();
});

// 合計金額の取得
function setTotalPrice(): void {
  if (totalPrice) {
    totalPrice.textContent = `合計金額 : ${Global.taiyakiManager.getTotalPrice()}円`;
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
  Global.taiyakiManager.taiyakiArr.forEach((taiyaki) => {
    // チェックボックス
    const checkBox: HTMLInputElement = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'check';
    const tdCheck: HTMLTableCellElement = document.createElement('td');
    tdCheck.id = 'check';
    tdCheck.appendChild(checkBox);
    // 種類
    const tdKind: HTMLTableCellElement = document.createElement('td');
    tdKind.textContent = taiyaki.kind;
    // 中身(具材)
    const tdContent: HTMLTableCellElement = document.createElement('td');
    tdContent.textContent = taiyaki.content;
    // サイズ
    const tdSize: HTMLTableCellElement = document.createElement('td');
    if (taiyaki.size === taiyakiSize.S) tdSize.textContent = '小';
    if (taiyaki.size === taiyakiSize.M) tdSize.textContent = '中';
    if (taiyaki.size === taiyakiSize.L) tdSize.textContent = '大';
    // 価格
    const tdPrice: HTMLTableCellElement = document.createElement('td');
    tdPrice.textContent = `${taiyaki.getPrice()}`;

    // 追加
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.appendChild(tdCheck);
    tr.appendChild(tdKind);
    tr.appendChild(tdContent);
    tr.appendChild(tdSize);
    tr.appendChild(tdPrice);
    tbody?.appendChild(tr);
  });
}

// 削除ボタンと編集ボタンの有効判定
function disabledCheck() {
  let checkCount: number = 0;
  checks.forEach((check) => {
    if (check.checked) checkCount++;
  });
  deleteBtn.disabled = 1 !== checkCount;
  editBtn.disabled = 1 !== checkCount;
}

// メーターに反映させる
function updateMeter(): void {
  if (meter) {
    possessionMoney = Number(inputPossessionMoney.value);
    // try {
    //   if (possessionMoney < Global.taiyakiManager.getTotalPrice()) {
    //     throw new Error(ABNORMAL_VALUE_ERROR);
    //   }
    // } catch {
    //   alert(INSUFFICIENT_MONEY);
    // }
    meter.value = Global.taiyakiManager.getTotalPrice() / possessionMoney;
  }
}
