const startBtn = document.querySelector("#start-btn");
const selectVerite = document.querySelector("#select-Verite");
const selectAction = document.querySelector("#select-Action");
const challengeQ = document.querySelector("#challenge");
const welcome = document.querySelector("#welcome");
const selectAnOption = document.querySelector("#select-an-option");
const questionSection1 = document.querySelector("#question-section1");
const accept = document.querySelector("#accept");
const decline = document.querySelector("#decline");

const mustDo = document.querySelector("#must-do");
const back1 = document.querySelector("#back1");
const back2 = document.querySelector("#back2");
const backToHome = document.querySelector("#back-to-home");


console.log(startBtn);
console.log(selectAnOption);
console.log(questionSection1);

startBtn.addEventListener("click", () => {
  welcome.style.display = "none";
  selectAnOption.style.display = "block";
  selectAnOption.classList.add = "select-an-option";
  console.log(selectAnOption.classList);
});
selectVerite.addEventListener("click", () => {
  let t = Math.round(Math.random() * (challenge.Veritequestions.length - 1));
  selectAnOption.style.display = "none";
  questionSection1.style.display = "block";
  challengeQ.innerHTML = `<h3 class ='challenge-header'>Vérité<h3>
  ${challenge.Veritequestions[t]}`;
  
});
selectAction.addEventListener("click", () => {
  let d = Math.round(Math.random() * (challenge.Actions.length - 1));
  selectAnOption.style.display = "none";
  questionSection1.style.display = "block";
  challengeQ.innerHTML = `<h3 class ='challenge-header'>Action<h3>
  ${challenge.Actions[d]}`;
  
});
function showHome() {
  let t = Math.round(Math.random() * (challenge.Veritequestions.length - 1));
  let d = Math.round(Math.random() * (challenge.Actions.length - 1));
  
  questionSection1.style.display = "none";
  selectAnOption.style.display = "block";
}

accept.addEventListener("click", () => {
  questionSection1.style.display = "none";
  selectAnOption.style.display = "block";
  
  let t = Math.round(Math.random() * (challenge.Veritequestions.length - 1));
  let d = Math.round(Math.random() * (challenge.Actions.length - 1));
  
});
back1.addEventListener("click", () => {
  selectAnOption.style.display = "none";
  welcome.style.display = "block";
});

