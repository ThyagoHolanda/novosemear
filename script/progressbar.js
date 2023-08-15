const pag = [
    { nome: "Anny", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Renan", mar: 25, abr: 25, mai: 25, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Mayara", mar: 25, abr: 25, mai: 25, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Thyago", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Helyziane", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Matheus", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Samuel", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Julio", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Gabriel", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Junior", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Igor", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Jefferson", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Sofia", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Cena", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Leticia Soares", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Leticia Ellen", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Vitoria Mariana", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Vitoria", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Geovana", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Emily", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Eriki", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Agatha", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Bianca", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Clara", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Mikael", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Rodrigo", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Yasmin", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
]

// Ordena o array em ordem alfabética pelo nome das pessoas
pag.sort((a, b) => a.nome.localeCompare(b.nome));

let amountRaised = totalPag();
let goal = (25 * 11) * pag.length;

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

    if (total !== 0) {
      totalPorPessoa[pessoa.nome] = total;
      let totalp = document.getElementById("nome");
      totalp.innerHTML += `<div id='${pessoa.nome}'>${pessoa.nome}: ${total.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })}</div>`
    }
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
  return totalPorMes;
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

  graf()
}

setInterval(updateProgress, 1000);


function graf() {
  // Dados para o gráfico
  const meses = ["mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez", "jan"];

  // Crie o gráfico
  const ctx = document.getElementById("grafico").getContext("2d");
  const meuGrafico = new Chart(ctx, {
    type: "bar", // Tipo de gráfico (barra)
    data: {
      labels: meses,
      datasets: [{
        label: "Totais por Mês",
        data: totalMes(),
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Cor das barras
        borderColor: "rgba(75, 192, 192, 1)", // Cor da borda das barras
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true // Começa o eixo y a partir do zero
        }
      }
    }
  });
}

