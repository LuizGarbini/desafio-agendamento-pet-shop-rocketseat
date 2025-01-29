import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários.
  hours.innerHTML = "";

  // Obtém a lista de horários ocupados.
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    // Recupera somente a hora.
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  // Renderiza os horários.
  opening.forEach(({ hour, available }, idx) => {
    const option = document.createElement("option");
    const isFirstElement = idx === 0;
    if (isFirstElement) {
      option.setAttribute("selected", "");
      option.classList.add("hour-selected");
    }

    option.classList.add("hour");
    option.setAttribute("value", hour);
    console.log(available);
    if (available) {
      option.setAttribute("enabled", "");
      option.removeAttribute("disabled", "");
      option.classList.add("hour-available");
    } else {
      option.removeAttribute("enabled", "");
      option.setAttribute("disabled", "");
      option.classList.add("hour-unavailable");
    }

    option.textContent = hour;

    hours.append(option);
  });

  // Adiciona o evento de clique nos horários disponíveis.
  hoursClick();
}
