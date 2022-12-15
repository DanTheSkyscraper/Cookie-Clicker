let RestartButton = document.querySelector(".restart-button");

RestartButton.addEventListener("click", restart);

function restart(){
    window.location.replace("./index.html");
}