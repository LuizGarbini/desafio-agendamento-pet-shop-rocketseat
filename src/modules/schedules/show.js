import dayjs from "dayjs";

// Seleciona as sessões manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpa as listas.
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderiza os agendamentos por período.
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");

      const separator = document.createElement("span");
      separator.classList.add("separator");
      separator.innerHTML = "/";

      const petName = document.createElement("span");
      petName.classList.add("pet-name");

      const clientName = document.createElement("span");

      const boxInfos = document.createElement("div");
      boxInfos.classList.add("box-infos");

      const serviceDescription = document.createElement("span");
      serviceDescription.classList.add("service-description");

      // Adiciona o id do agendamento.
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      clientName.textContent = schedule.name;

      // Cria ícone de cancelar o agendamento.
      const cancelButton = document.createElement("span");
      cancelButton.classList.add("remove-button");
      cancelButton.setAttribute("alt", "Remover agendamento");

      // Adiciona o tempo, nome e o ícone do item.
      item.append(time, boxInfos, cancelButton);
      boxInfos.append(petName, separator, clientName);

      // Obtém somente a hora
      const hour = dayjs(schedule.when).hour();

      // Renderiza o agendamento na sessão (manhã, tarde ou noite).
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Não foi possível exibir os agendamentos");
    console.log(error);
  }
}
