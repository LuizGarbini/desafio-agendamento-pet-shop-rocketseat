const hoursSelect = document.getElementById("hours");
hoursSelect.addEventListener("change", (event) => {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((hour) => {
    const isSelected = hour.value === event.target.value;
    isSelected
      ? hour.classList.add("hour-selected")
      : hour.classList.remove("hour-selected");
  });
});

export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (select) => {
      // Remove a classe hour-selected de todas as options não selecionadas.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // Adiciona a classe na option clicada.
      select.target.classList.add("hour-selected");
    });
  });
}
