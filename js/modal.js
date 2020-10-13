//login modal

let activate = document.getElementById("modal-btn-1"); //
let modal = document.getElementById("modal");
let close = document.getElementById("close");

activate.addEventListener("click", openLogIn);

function openLogIn() {
  modal.style.display = "flex";
}

close.addEventListener("click", closeLogIn);

function closeLogIn() {
  modal.style.display = "none";
}

//sign up modal2
let activate2 = document.getElementById("modal-btn-2");
let modal2 = document.getElementById("modal2");
let close2 = document.getElementById("close2");

activate2.addEventListener("click", openSignUp);

function openSignUp() {
  modal2.style.display = "flex";
}

close2.addEventListener("click", closeSignUp);

function closeSignUp() {
  modal2.style.display = "none";
}
