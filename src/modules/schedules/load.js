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
  const dailySchedules = await scheduleFetchByDay({ date: date2 });

  // Exibe os agendamentos
  schedulesShow({ dailySchedules });

  const dailySchedulesDialog = await scheduleFetchByDay({ date: date1 });
  // Renderiza as horas disponíveis
  hoursLoad({ date: date1, dailySchedules: dailySchedulesDialog });
}
