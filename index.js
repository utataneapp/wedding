'use strict';
// ナビゲーションバーを閉じる
const nav = document.getElementById('navbarSupportedContent');
const navClickHandler = () => {
  nav.className = 'collapse navbar-collapse';
};
const buttons = document.getElementsByClassName('nav-link');
for (const button of buttons) {
  button.addEventListener('click', () => {
    navClickHandler();
  });
}
// Google Form機能の実装
const sendGForm = (f) => {
  // バリデーション機能の実装
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  console.log(nameInput.value);
  console.log(emailInput.value);
  const nameValidatable = {
    value: nameInput.value,
    required: true,
    address: false,
  };
  const emailValidatable = {
    value: emailInput.value,
    required: true,
    address: true,
  };
  if (!validate(nameValidatable) || !validate(emailValidatable)) {
    alert('入力値が正しくありません。\n再度入力をお願いします。');
  } else {
    f.submit();
    document.forms[0].submit();
    const attendence = document.getElementById('attendance');
    if (attendence.checked) {
      alert(
        'ご回答ありがとうございます。結婚式で会えるのを楽しみにしています＊'
      );
    } else {
      alert('ご回答ありがとうございます。');
    }
    const reset = document.getElementById('reset');
    const send = document.getElementById('send');
    reset.click();
    send.id = 'sent';
  }
};
// バリデーション関数の作成
function validate(validableInput) {
  let isValid = true;
  if (validableInput.required) {
    isValid = isValid && validableInput.value.toString().length !== 0;
  }
  if (validableInput.minLength != null) {
    isValid =
      isValid &&
      validableInput.value.toString().length >= validableInput.minLength;
  }
  if (validableInput.address) {
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    isValid = isValid && regex.test(validableInput.value);
  }
  return isValid;
}
