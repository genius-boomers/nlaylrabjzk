const orderNumber = document.getElementById("order-number");
const date = document.getElementById("date");
const orderTime = document.getElementById("order-time");
const targetTime = document.getElementById("target-time");
const completedTime = document.getElementById("completed-time");

const receiptImg = document.querySelector(".receipt-img");
const content = document.querySelector(".content");

window.onload = () => {
  content.style.width = receiptImg.offsetWidth + "px";
  orderNumber.innerText = "#2945" + Math.floor(1000 + Math.random() * 9000);
  date.innerText = moment().format("ddd[.] MMM[.] DD[th,] YYYY");
  orderTime.innerText = moment().format("[Ordered: ] YYY");
  const waitLength = Math.floor(10 + Math.random() * 15);
  const randomTarget = Math.floor(Math.random() * 4);
  const randomCompleted = Math.floor(Math.random() * 3);
  orderTime.innerText = moment()
    .add(-waitLength, "minutes")
    .format("[Ordered:] h:mm A");
  targetTime.innerText = moment()
    .add(randomTarget, "minutes")
    .format("[Target:] h:mm A");
  completedTime.innerText = moment()
    .add(-randomCompleted, "minutes")
    .format("[Completed:] h:mm A");
  console.log("updated 3");
};
