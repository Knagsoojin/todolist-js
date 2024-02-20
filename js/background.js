const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];

const getImage = images[Math.floor(Math.random() * images.length)];

const backgroundImg = document.createElement("img");

backgroundImg.src = `img/${getImage}`;
document.body.appendChild(backgroundImg);
