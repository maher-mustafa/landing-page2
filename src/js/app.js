let counter = document.querySelector(".result")
let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")


// Increase counter

function increaseCounter() {
  let currentCount = parseInt(counter.textContent);
  counter.textContent = currentCount + 1;
}

// Decrease counter

function decreaseCounter() {
  let currentCount = parseInt(counter.textContent);

  if (currentCount > 0) {
    counter.textContent = currentCount - 1;
  }
}

// Reset counter

function resetCounter() {
  counter.textContent = 0;
}

// Event listeners

minus.addEventListener("click", decreaseCounter);
plus.addEventListener("click", increaseCounter);
