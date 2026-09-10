// Constantes
const quizConteiner = document.querySelector(".quiz");
const question = document.getElementById("question");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const start = document.getElementById("start");

// Event Listeners
a1.addEventListener("click", () => update_question(3));
a2.addEventListener("click", () => update_question(1));
a3.addEventListener("click", () => update_question(2));
start.addEventListener("click", () => update_question(0));

quizConteiner.addEventListener("animationend", toggleAnimation)

// Contadores
let current = 0;
let points = 0;

//Funções
function toggleAnimation(){
  if(quizConteiner.classList.contains("fadeup")){
          quizConteiner.classList.remove("fadeup")
          quizConteiner.classList.add("glowup") 
  }else{
          quizConteiner.classList.remove("glowup")
  }
}

function update_question(answer){ // o argumento answer é a quantidade de pontos adicionada
  console.log("answer: "+answer)
  document.querySelector(".quiz").classList.add("fadeup")
  points += answer;
  if(answer == 0){
    start.classList.add("inactive");
    a1.classList.remove("inactive");
    a2.classList.remove("inactive");
    a3.classList.remove("inactive");
  }
  if(current == 10){
    console.log(points)
    let status
    if(points < 12){
      status = "<strong>Technophobic</strong>: You feel fear or a strong aversion toward medical robots, experiencing discomfort or anxiety"
    }else if(points < 23){
      status = "<strong>Cautious</strong>: You trust robot doctors and doctors, but not blindly, to prevent risks."
    }else{
      status = "<strong>Pragmatics</strong>: You prefer something objective and straightforward, choosing either a physical doctor or a medical robot, as long as it's the most practical option."
    }
    question.innerHTML = "your pontutation is " + points + ", that means you are:<br>" + status
    a1.remove();
    a2.remove();
    a3.remove();

  }else{
    question.textContent = questions[current].question;
    a1.textContent = questions[current].a1;
    a2.textContent = questions[current].a2;
    a3.textContent = questions[current].a3;
    current++;
  } 
}

a1.classList.add("inactive");
a2.classList.add("inactive");
a3.classList.add("inactive");