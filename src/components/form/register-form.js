// export function createRegisterForm() {
//   return `
//         <form class="form">
//             <h2>Reset Password</h2>
//             <p>Please enter your email to receive a link to create a new password via email</p>
//             <input placeholder="email" />
//             <input type="submit" class="btn" />
//         </form>
//     `;
// }

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "Reset Password";

  const enterText = document.createElement("p");
  enterText.innerText =
    "Please enter your email to receive a link to create a new password";

  const emailInput = document.createElement("input");
  emailInput.placeholder = "Email";

  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = "Submit";

  function pwReset() {
    alert("you got an email");
  }

  button.addEventListener("click", pwReset);

  form.append(title, enterText, emailInput, button);

  return form;
}
