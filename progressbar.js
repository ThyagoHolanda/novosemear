const anne = [25, 0, 0, 0];
const renan = [25, 25, 25, 0];
const mayara = [25, 25, 25 ,0];
const thyago = [25, 0, 0, 0];
const hely = [25, 0, 0, 0];
var soma = 0;

for (i = 0; i < 12; i++) {
  if (i<anne.length) {
      soma += Number(anne[i]);
  }
  if (i<renan.length) {
      soma += Number(renan[i]);
  }
  if (i<mayara.length) {
      soma += Number(mayara[i]);
  }
  if (i<thyago.length) {
      soma += Number(thyago[i]);
  }
  if (i<hely.length) {
      soma += Number(hely[i]);
  }
}

var amountRaised = soma;
var goal = (25 * 11) * 25;

function updateProgress() {
  var countdown = document.querySelector(".countdown");
  var targetDate = new Date("02/09/2024");
  var daysElement = document.getElementById("days");
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var secondsElement = document.getElementById("seconds");


  var currentDate = new Date();
  var difference = targetDate.getTime() - currentDate.getTime();

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysElement.textContent = formatTime(days);
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }


  //Progress Bar
  var progress = amountRaised / goal * 100;
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
}

setInterval(updateProgress, 1000);

