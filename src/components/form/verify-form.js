import { createElement } from "../utils/createElement";

function createInput() {
  const input = createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
    maxLength: "1",
  });

  return input;
}

function createTitle() {
  const title = createElement("h2", {
    innerText: "We have sent an OPT to your Mobile",
  });

  return title;
}

function createParagraph() {
  const text = createElement("p", {
    innerText:
      "Please check your Mobile number 071*****12 continue to reset your passsord",
  });
  return text;
}

function createHint() {
  const hint = createElement("p", {
    className: "form__hint",
    innerText: "Didn`t Receive?",
  });

  const resendLink = createElement("a", {
    innerText: "Clicke here",
    href: "#",
  });

  hint.append(resendLink);

  return hint;
}

// Create Next- Button

function createButton() {
  const button = createElement("button", {
    innerText: "Next",
    className: "btn",
  });
  return button;
}

// Export Function

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = createTitle();

  const text = createParagraph();

  const code1 = createInput();
  const code2 = createInput();
  const code3 = createInput();
  const code4 = createInput();

  const password = createElement("div", {
    className: "form__otp",
    children: [code1, code2, code3, code4],
  });

  const button = createButton();

  const hint = createHint();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const secretPassword = "3217";
    const pw = code1.value + code2.value + code3.value + code4.value;

    if (pw === secretPassword) {
      alert(`Your OTP ${pw} is correct`);
    } else {
      alert("password is NOT correct");
    }
  });

  form.append(title, text, password, button, hint);
  return form;
}
