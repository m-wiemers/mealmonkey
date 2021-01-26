import "./input.css";
import inputmail from "./input-email.html";
import inputpass from "./input-password.html";

export default {
  title: "Components/Input",
  parameters: { layout: "centered" },
};

export const email = () => inputmail;
export const password = () => inputpass;
