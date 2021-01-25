import "./button.css";
import buttonBorder from "./button-border.html";
import buttonFilled from "./button-filled.html";
import buttonFacebook from "./button-facebook.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const border = () => buttonBorder;
export const filled = () => buttonFilled;
export const facebook = () => buttonFacebook;
