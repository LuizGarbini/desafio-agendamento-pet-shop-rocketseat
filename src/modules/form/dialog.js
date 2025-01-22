const togglePopUp = document.getElementById("dialog");

togglePopUp.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    togglePopUp.classList.add("open");
  } else {
    togglePopUp.classList.remove("open");
  }
});
