let current = 0;
let points = 0;
const quizConteiner = document.querySelector(".quiz");

quizConteiner.addEventListener("animationend", () => {
    if(quizConteiner.classList.contains("fadeup")){
        
        quizConteiner.classList.remove("fadeup")
        quizConteiner.classList.add("glowup") 
    }else{
        quizConteiner.classList.remove("glowup")
    }

}) 

function update_question(answer){
  document.querySelector(".quiz").classList.add("fadeup")
  if(current == 9){
    console.log(points)
    let status
    if(points < 12){
      status = "<strong>Technophobic</strong>: You feel fear or a strong aversion toward medical robots, experiencing discomfort or anxiety"
    }else if(points < 23){
      status = "<strong>Cautious</strong>: You trust robot doctors and doctors, but not blindly, to prevent risks."
    }else{
      status = "<strong>Pragmatics</strong>: You prefer something objective and straightforward, choosing either a physical doctor or a medical robot, as long as it's the most practical option."
    }
    document.getElementById("question").innerHTML = "your pontutation is " + points + ", that means you are:<br>" + status
    document.getElementById("a1").remove()
    document.getElementById("a2").remove()
    document.getElementById("a3").remove()

  }else{
    document.getElementById("question").textContent = questions[current].question;
    document.getElementById("a1").textContent = questions[current].a1;
    document.getElementById("a2").textContent = questions[current].a2;
    document.getElementById("a3").textContent = questions[current].a3;
    switch(answer){
        case 1:
            points += 3;
            break;
        case 2:
            points += 1;
            break;
        case 3:
            points += 2;
            break;
    }
    current++;
  } 
}


update_question();

