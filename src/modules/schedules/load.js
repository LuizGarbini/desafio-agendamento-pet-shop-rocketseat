import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

// Seleciona o input de data.
const [select1, select2] = document.getElementsByClassName("date");
export async function schedulesDay() {
  // Obtém a data do input
  const date1 = select1.value;
  const date2 = select2.value;

  // Buca na API os agendamentos.
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis
  hoursLoad({ date1, date2, dailySchedules });
}
