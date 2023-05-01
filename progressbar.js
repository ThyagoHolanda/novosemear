var amountRaised = 125;
var rendimento = 300-amountRaised;
var goal = (25 * 11) * 25;
// amountRaised = 125;
// rendimento = 127.43-amountRaised;

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
  document.getElementById("rendimento").innerHTML = "Rendimento: " + rendimento.toLocaleString('pt-br', {
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
  
  