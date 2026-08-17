// 検索フォームのボタン操作
const searchForm = document.getElementById('search-form');
const voiceSearchBtn = document.getElementById('voice-search-btn');
const imageSearchBtn = document.getElementById('image-search-btn');
const aiSearchBtn = document.getElementById('ai-search-btn');

// ショートカット　ポップアップのボタン操作
const shortcutBtn = document.getElementById('shortcut-btn');
const shortcutPopup = document.getElementById('shortcut-popup');
const cancelBtn = document.getElementById('cancel-btn');
const doneBtn = document.getElementById('done-btn');
const nameInput = document.getElementById('name-input');
const urlInput = document.getElementById('url-input');


// ポップアップを開く
function openModal(){
    shortcutPopup.classList.add('is-open');
    modalOverlay.classList.add('is-open');
}

// ポップアップを閉じる
function closeModal(){
    shortcutPopup.classList.remove('is-open');
    modalOverlay.classList.remove('is-open');
    nameInput.value = '';
    urlInput.value = '';
    doneBtn.disabled = true;
}

// 入力内容を確認して完了ボタンの状態を切り替える
function updateDoneButton() {
    const hasName = nameInput.value.trim() !== '';
    const hasUrl = urlInput.value.trim() !== '';

    if (hasName && hasUrl) {
        doneBtn.disabled = false;
    } else {
        doneBtn.disabled = true;
    }
}

// クリック時の動作
    shortcutBtn.addEventListener('click',openModal);
    cancelBtn.addEventListener('click',closeModal);
    doneBtn.addEventListener('click',closeModal);

// 入力するたびにボタンの状態を確認
    nameInput.addEventListener('input', updateDoneButton);
    urlInput.addEventListener('input', updateDoneButton);