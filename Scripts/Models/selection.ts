// 購入ボタンの取得
const purchaseBtn = document.getElementById('purchase') as HTMLButtonElement;
// キャンセルボタンの取得
const cancelBtn = document.getElementById('cancel') as HTMLButtonElement;

// 購入ボタンの取得
purchaseBtn.addEventListener('click', () => {
  window.location.href = 'main.html';
});

// キャンセルボタンの取得
cancelBtn.addEventListener('click', () => {
  window.location.href = 'main.html';
});
