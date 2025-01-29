const togglePopUp = document.getElementById("dialog");
const overlay = document.getElementById("overlay");

togglePopUp.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    togglePopUp.classList.add("open");
    overlay.classList.add("open");
  } else {
    togglePopUp.classList.remove("open");
    overlay.classList.remove("open");
  }
});
