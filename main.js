const share = document.getElementById("share");
const mostrar = document.getElementById("mostrar");

share.addEventListener("click", () => {
  mostrar.classList.toggle("hidden");
  mostrar.classList.toggle("flex");
});
share.addEventListener("click", () => {
  avatar.classList.toggle("hidden");
  avatar.classList.toggle("flex");
});


