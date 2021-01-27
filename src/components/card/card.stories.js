import "./card.css";
import cardOffers from "./card-offers.html";
import cardSrilankan from "./card-srilankan.html";
import cardItalian from "./card-italian.html";
import cardContainer from "./card-container.html";

export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const Offers = () => cardOffers;
export const SriLankan = () => cardSrilankan;
export const Italian = () => cardItalian;
export const Container = () => cardContainer;
Container.parameters = { layout: "fullscreen" };
