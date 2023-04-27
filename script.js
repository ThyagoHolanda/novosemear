var amountRaised = 75;
var goal = (25 * 11) * 25;
//var daysLeft = 25;

function updateProgress() {
  var progress = amountRaised / goal * 100;
  document.getElementById("progress").style.width = progress + "%";
  document.getElementById("amount-raised").innerHTML = amountRaised.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  document.getElementById("goal").innerHTML = "Meta: " + goal.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  document.getElementById('porcentagem').innerHTML = progress.toFixed(2) + "%";
  //document.getElementById("days-left").innerHTML = daysLeft + " dias restantes";
}


// Tempo que falta para o retiro
function updateDate() {
  var inicialDate = new Date()
  var finalDate = new Date('February 9 2024')

  res = document.getElementById("days-left")

  var mes = (finalDate - inicialDate) / (1000 * 60 * 60 * 24 * (365) / 12);
  var dias = (finalDate - inicialDate) / (1000 * 60 * 60 * 24)
  var hora = (finalDate - inicialDate) / (1000 * 60 * 60)
  var minuto = (finalDate - inicialDate) / (1000 * 60)
  var segundo = (finalDate - inicialDate) / (1000)

  res.innerHTML = `Faltam ${dias.toFixed(0)} dias`

}

// Exemplo de como adicionar doação
/*
document.getElementById("donate-button").addEventListener("click", function() {
  var donationAmount = parseFloat(document.getElementById("donation-amount").value);
  amountRaised += donationAmount;
  updateProgress();
});
*/
