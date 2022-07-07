// 終了ボタンの取得
const endBtn = document.getElementById('close') as HTMLButtonElement;

// 終了ボタンの処理
endBtn.addEventListener('click', () => {
  window.close();
  if (!window.closed) {
    alert('閉じるのに失敗しました。直接このタブを閉じて下さい。');
  }
});
