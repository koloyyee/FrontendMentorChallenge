const submitBtn = document.querySelector("#submitBtn");
const ratedValue = document.querySelectorAll(".rating_circle");
const selectedValue = document.querySelector("#selected_value");
const ratingCard = document.querySelector("#rating_card");
const thankYouCard = document.querySelector("#thank_you_card");
let ratings;
let isSelected = false;

function highSelectedRating() {
  ratings = this.innerText;
  if (isSelected === false) {
    this.classList.add("selected");
    isSelected = true;
  } else {
    this.classList.remove("selected");
    isSelected = false;
  }
}
ratedValue.forEach((value) =>
  value.addEventListener("click", highSelectedRating)
);

function showThankYouCard(ratings) {
  console.log(ratings);
  selectedValue.textContent = ` You selected ${ratings} out of 5`;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ratingCard.style.display = "none";
  thankYouCard.style.display = "block";

  showThankYouCard(ratings);
});
