import IMask from "imask";

let phoneMask;
const phoneInput = document.getElementById("phone");

window.onload = () => {
  makePhoneMaskUi();
};

function makePhoneMaskUi() {
  phoneMask = IMask(phoneInput, { mask: "(00) 0 0000-0000" });

  phoneInput.addEventListener("input", () => {
    phoneMask.updateValue();
  });
}
