function buttonPressed() {
  var button = document.getElementById("myButton");
  button.style.transform = "scale(0.8)";
  button.style.backgroundColor = "red";
  openNewWindow(); // добавляем вызов открытия нового окна
}

function buttonReleased() {
  var button = document.getElementById("myButton");
  button.style.transform = "scale(1)";
  button.style.backgroundColor = "#007bff";
}

function changeBlock() {
  var block1 = document.getElementById("block1");
  var block2 = document.getElementById("block2");

  block1.style.display = "none";
  block2.style.display = "block";
}

function changeBlockBack() {
  var block1 = document.getElementById("block1");
  var block2 = document.getElementById("block2");

  block1.style.display = "block";
  block2.style.display = "none";
}

const dropDate = new Date("May 15 2024 23:59:59").getTime();

// Функция для обновления обратного отсчета
function updateCountdown() {
  const now = new Date().getTime();
  const difference = dropDate - now;

  // Вычисляем дни, часы, минуты и секунды
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerHTML = `До дропа осталось: ${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

// Обновляем обратный отсчет каждую секунду
setInterval(updateCountdown, 1000);
