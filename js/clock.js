const clock = document.querySelector("h1#clock");

function getClock() {
  const date = new Date();
  // padStart(내가 원하는 길이, "내가 원하는 첫번째 글자")
  const hours = String(date.getHours()).padStart(2, "0");
  const miuntes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${miuntes}:${second}`;
}

getClock();
setInterval(getClock, 1000);
