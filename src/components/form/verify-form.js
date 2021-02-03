function createOTPinput() {
  const input = document.createElement("input");
  input.type = "password";
  input.className = "codeinput";
  input.maxLength = "1";
  input.placeholder = "*";

  return input;
}

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OPT to your Mobile";

  const text = document.createElement("p");
  text.innerText =
    "Please check yout mobile number 071******12 continue to reset your password";

  const code1 = createOTPinput();

  const code2 = createOTPinput();

  const code3 = createOTPinput();

  const code4 = createOTPinput();

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  const hint = document.createElement("p");
  hint.className = "form__hint";
  hint.innerText = "Didn`t Receitve?";

  const resendLink = document.createElement("a");
  resendLink.innerText = "Click here";
  resendLink.href = "#";

  const password = document.createElement("div");
  password.className = "form__otp";
  password.append(code1, code2, code3, code4);

  hint.append(resendLink);

  form.append(title, text, password, button, hint);
  return form;
}
