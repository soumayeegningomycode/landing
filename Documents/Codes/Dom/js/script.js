const cards = document.querySelectorAll(".card");
const total = document.querySelector(".total");

function updateTotal() {
  let sum = 0;

  document.querySelectorAll(".card").forEach((card) => {
    const price = parseInt(card.querySelector(".unit-price").textContent);
    const quantity = parseInt(card.querySelector(".quantity").textContent);

    sum += price * quantity;
  });

  total.textContent = sum + " $";
}

cards.forEach((card) => {
  const plus = card.querySelector(".plus");
  const minus = card.querySelector(".minus");
  const quantity = card.querySelector(".quantity");
  const deleteBtn = card.querySelector(".delete");
  const heart = card.querySelector(".heart");

  plus.addEventListener("click", () => {
    quantity.textContent++;
    updateTotal();
  });

  minus.addEventListener("click", () => {
    if (quantity.textContent > 0) {
      quantity.textContent--;
      updateTotal();
    }
  });

  deleteBtn.addEventListener("click", () => {
    card.remove();
    updateTotal();
  });

  heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
  });
});