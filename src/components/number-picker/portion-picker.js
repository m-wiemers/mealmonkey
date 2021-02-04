import { createElement } from "../utils/createElement";

function createPickerInput() {
  return createElement("input", {
    className: "inputPortions",
    placeholder: "0",
    type: "number",
    min: 0,
    max: 99,
  });
}

function createPlusButton() {
  return createElement("button", {
    className: "btn",
    innerText: "+",
  });
}

function createMinusButton() {
  return createElement("button", {
    className: "btn",
    innerText: "-",
  });
}

export function numberPicker() {
  const pickerInput = createPickerInput();
  const plusButton = createPlusButton();
  const minusButton = createMinusButton();

  return createElement("form", {
    className: "numberForm",
    children: [
      createElement("p", {
        innerText: "Number of portions",
      }),
      minusButton,
      pickerInput,
      plusButton,
    ],
  });
}
