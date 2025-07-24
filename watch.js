let body = document.querySelector('body');

let today = document.querySelector('#date');

const img = [
    "url(img-1.jpg)", "url(img-2.jpg)", "url(img-3.jpg)", "url(img-4.jpg)", "url(img-5.jpg)"
]

setInterval(() => {
 let cng = Math.floor(Math.random()*5);
body.style.backgroundImage = img[cng];
},5000);


let hourHand = document.querySelector('.hour');
let minuteHand = document.querySelector('.min');
let secondHand = document.querySelector('.sec');

function updateClock() {
  const now = new Date();

  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  
  today.textContent = `Date: ${date}/${month}/${year}`;

  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  
  let secDeg = seconds * 6; 
  let minDeg = minutes * 6 + seconds * 0.1; 
  let hourDeg = (hours % 12) * 30 + minutes * 0.5; 

  
  hourHand.style.transform = `rotateZ(${hourDeg}deg)`;
  minuteHand.style.transform = `rotateZ(${minDeg}deg)`;
  secondHand.style.transform = `rotateZ(${secDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); 



