const pag = [
  { nome: "Anny", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
  { nome: "Renan", mar: 25, abr: 25, mai: 25, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
  { nome: "Mayara", mar: 25, abr: 25, mai: 25, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
  { nome: "Thyago", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
  { nome: "Helyziane", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
]

let amountRaised = totalPag();
let goal = (25 * 11) * 25;



function totalPag() {
  let soma = 0;
  for (const pessoa of pag) {
    for (const mes in pessoa) {
      if (typeof pessoa[mes] === 'number') {
        soma += pessoa[mes];
      }
    }
  }
  return soma;
}

function totalPessoa() {

  const totalPorPessoa = {};
  for (const pessoa of pag) {
    let total = 0;

    for (const mes in pessoa) {
      if (mes !== "nome") {
        total += pessoa[mes];
      }
    }

    totalPorPessoa[pessoa.nome] = total;
    let totalp = document.getElementById(pessoa.nome);
    totalp.innerHTML = `<strong>${pessoa.nome}</strong>: ${total.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })}`
  }
}


function totalMes() {
  const totalPorMes = {};
  for (const pessoa of pag) {
    for (const mes in pessoa) {
      if (mes !== "nome") {
        totalPorMes[mes] = (totalPorMes[mes] || 0) + pessoa[mes];
      }
    }
  }
}


function updateProgress() {
  let countdown = document.querySelector(".countdown");
  let targetDate = new Date("02/09/2024");
  let daysElement = document.getElementById("days");
  let hoursElement = document.getElementById("hours");
  let minutesElement = document.getElementById("minutes");
  let secondsElement = document.getElementById("seconds");


  let currentDate = new Date();
  let difference = targetDate.getTime() - currentDate.getTime();

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysElement.textContent = formatTime(days);
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }


  //Progress Bar
  let progress = amountRaised / goal * 100;
  document.getElementById("progress").style.width = progress + "%";
  document.getElementById("amount-raised").innerHTML = "Atual: " + amountRaised.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });

  document.getElementById("goal").innerHTML = "Total: " + goal.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  document.getElementById('porcentagem').innerHTML = progress.toFixed(2) + "%";

  totalPessoa()
}

setInterval(updateProgress, 1000);

