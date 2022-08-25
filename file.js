const price = document.getElementById("totalPrice");
console.log(price);
console.log(price.innerHTML);

const quantity = document.getElementsByClassName("quantity");
const prices = document.getElementsByClassName("Prix");

const heart = document.getElementsByClassName("fas fa-heart");

console.log(heart);
for (let i = 0; i < heart.length; i++) {
  heart[i].onclick = function () {
    if (!this.style.color) {
      this.style.color = "red";
      console.log(this.style.color);
    } else {
      this.style.color = "";
    }
  };
}

const btnPlus = document.getElementsByClassName("plus");
const tab = [];
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function() {
    price.innerHTML = parseInt(price.innerHTML) - quantity[i].value * parseInt(prices[i].innerHTML);
    quantity[i].value++;
    const p = quantity[i].value * parseInt(prices[i].innerHTML)
    price.innerHTML = parseInt(price.innerHTML) + p
  });
}

const btnTrash = document.getElementsByClassName("fas fa-trash");
for (let i = 0; i < btnTrash.length; i++) {
  btnTrash[i].addEventListener("click", function() {
    btnTrash[i].parentNode.parentNode.remove();
  });
}
const btnMoins = document.getElementsByClassName("moins");
for (let i = 0; i < btnMoins.length; i++) {
  btnMoins[i].addEventListener("click", function() {
    quantity[i].value--;
    const p = quantity[i].value * parseInt(prices[i].innerHTML)
    price.innerHTML = p
  });
}
const badge = document.querySelector(".badge");
badge.innerHTML = btnPlus.length;

const prixTotalCalcul = document.getElementsByClassName("Prix");
console.log(prixTotalCalcul);
for (let i = 0; i < prixTotalCalcul.length; i++) {}
