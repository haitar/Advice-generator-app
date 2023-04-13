"use strict";
const randomBtn = document.querySelector(".random");

randomBtn.addEventListener("click", getAdvice);

async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    const id = document.querySelector(".id");
    id.innerHTML = data.slip.id;
    const advice = document.querySelector(".advice");
    advice.innerHTML = data.slip.advice;
  } catch (err) {
    console.error(err);
  }
}
