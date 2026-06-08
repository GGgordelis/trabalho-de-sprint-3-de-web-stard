// Selecionar dias
const days = document.querySelectorAll(".days span");

days.forEach(day => {

  day.addEventListener("click", () => {

    if(day.textContent !== ""){

      document
      .querySelector(".selected")
      .classList.remove("selected");

      day.classList.add("selected");

    }

  });

});

// Selecionar horário
const times = document.querySelectorAll(".times button");

times.forEach(time => {

  time.addEventListener("click", () => {

    document
    .querySelector(".active-time")
    .classList.remove("active-time");

    time.classList.add("active-time");

  });

});

// Botão continuar
const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

  const selectedDay =
    document.querySelector(".selected").textContent;

  const selectedTime =
    document.querySelector(".active-time").textContent;

  alert(
    `Transporte agendado para o dia ${selectedDay} às ${selectedTime}`
  );

});