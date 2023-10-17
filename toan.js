const targetDate = new Date("2023-12-31T23:59:59").getTime();
const interval = setInterval(function() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById("countdown");
   countdownElement.innerHTML = ` 
   <div class=" flex justify-around ">
   <div>
     <h1 class="text-white text-lg text-center font-light pb-2">Ngày</h1>
     <div class="w-12 h-12 bg-white rounded-2xl flex justify-center items-center"> ${days}</div>
   </div>
   <div class="">
     <h1 class="text-white text-lg text-center font-light pb-2">Giờ</h1>
     <div class="w-12 h-12 bg-white rounded-2xl flex justify-center items-center">${hours}</div>
   </div>
    <div>
     <h1 class="text-white text-lg text-center font-light pb-2">Phút</h1>
     <div class="w-12 h-12 bg-white rounded-2xl flex justify-center items-center">${minutes}</div>
   </div>
    <div>
     <h1 class="text-white text-lg text-center font-light pb-2">Giây</h1>
     <div class="w-12 h-12 bg-white rounded-2xl flex justify-center items-center">${seconds}</div>
   </div>
 </div>
   `
  

  if (timeLeft < 0) {
    clearInterval(interval);
    countdownElement.innerHTML = "Countdown expired!";
  }
}, 1000);