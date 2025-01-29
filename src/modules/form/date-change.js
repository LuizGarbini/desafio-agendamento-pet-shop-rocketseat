import { schedulesDay } from "../schedules/load";

// Seleciona o input de data
const [select1, select2] = document.getElementsByClassName("date");

// Recarrega a lista de horários quando o input de data mudar.
select1.onchange = () => schedulesDay();
select2.onchange = () => schedulesDay();
