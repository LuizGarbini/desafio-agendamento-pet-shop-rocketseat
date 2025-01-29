import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const petName = document.getElementById("pet");
const phoneNumber = document.getElementById("phone");
const serviceDescription = document.getElementById("description");
const [select1, select2] = document.getElementsByClassName("date");

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data minima como sendo a atual.
select1.value = inputToday;
select1.min = inputToday;
select2.value = inputToday;
select2.min = inputToday;

form.onsubmit = async (event) => {
  // Faz com que o navegador nao de refresh na página
  event.preventDefault();

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    const pet = petName.value.trim();

    if (!pet) {
      return alert("Informe o nome do seu pet!");
    }

    const phone = phoneNumber.value.trim();

    if (!phone) {
      return alert("Informe seu número de telefone!");
    }

    const description = serviceDescription.value.trim();

    if (!description) {
      return alert("Informe a descrição do serviço");
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    // Recupera o horário selecionado.
    if (!hourSelected) {
      return alert("Selecione a hora.");
    }

    // Recupera somente a hora.
    const [hour] = hourSelected.innerText.split(":");

    // Insere a hora na data.
    const when = dayjs(select1.value).add(hour, "hour");

    // Gera um ID
    const id = new Date().getTime();

    // Faz o agendamento
    await scheduleNew({
      id,
      name,
      pet,
      phone,
      description,
      when,
    });
    // Recarrega os agendamentos.
    await schedulesDay();

    // Limpa o input de nome do cliente, nome do pet e telefone.
    clientName.value = "";
    phoneNumber.value = "";
    petName.value = "";
    serviceDescription.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
