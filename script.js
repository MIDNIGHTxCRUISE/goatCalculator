"use strict";

// HTML Elements
const form = document.querySelector(".form");
const purchase = document.querySelector(".purchase");
const saleAmount = document.querySelector(".saleAmt");
const btn = document.querySelector(".calculate");
const outPut = document.querySelector(".profit");

// Seller Fee Calculation
const sellerFee2 = (purchase, sale) =>
  Math.trunc(sale - 0.124 * sale - purchase - 5);

// Event Handler
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const result = sellerFee2(purchase.value, saleAmount.value);
  outPut.innerText = result;
  result > 30
    ? (outPut.style.color = "green")
    : result >= 15
    ? (outPut.style.color = "orange")
    : (outPut.style.color = "red");
});
