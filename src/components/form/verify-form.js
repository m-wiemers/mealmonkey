function createOTPinput() {
  const input = document.createElement("input");
  input.type = "password";
  input.className = "codeinput";
  input.maxLength = "1";
  input.placeholder = "*";

  return input;
}

function createPasswordContainer() {
  const code1 = createOTPinput();
  const code2 = createOTPinput();
  const code3 = createOTPinput();
  const code4 = createOTPinput();

  const password = document.createElement("div");
  password.className = "form__otp";
  password.append(code1, code2, code3, code4);

  return password;
}

function createHeadline() {
  const title = document.createElement("h2");
  title.innerText = "We have sent an OPT to your Mobile";

  return title;
}

function createParagraph() {
  const text = document.createElement("p");
  text.innerText =
    "Please check your Mobile number 071******12 continue to reset your password";

  return text;
}

function createHint() {
  const hint = document.createElement("p");
  hint.className = "form__hint";
  hint.innerText = "Didn`t Receive?";

  const resendLink = document.createElement("a");
  resendLink.innerText = "Clicke here";
  resendLink.href = "#";

  hint.append(resendLink);

  return hint;
}

function createButton() {
  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  return button;
}

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = createHeadline();

  const text = createParagraph();

  const password = createPasswordContainer();

  const button = createButton();

  const hint = createHint();

  form.append(title, text, password, button, hint);
  return form;
}
