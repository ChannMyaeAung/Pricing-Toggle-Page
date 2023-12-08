export default function toggle() {
  const toggleCheckbox = document.getElementById("toggle");

  const priceContainers = document.querySelectorAll(".price-container");

  toggleCheckbox.addEventListener("change", () => {
    priceContainers.forEach((container) => {
      container.classList.toggle("show-monthly-price");
    });
  });
}
