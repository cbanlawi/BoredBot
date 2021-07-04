const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then(data => {
      document.getElementById("title").textContent = "Happy Bot";
      document.getElementById("activity").textContent = data.activity;
      btn.textContent = "😀";
      document.body.classList.add("fun");
    });
});