// DATASET
let current = 0;
let points = 0;
const quizConteiner = document.querySelector(".quiz");
quizConteiner.addEventListener("animationend", () => {
  quizConteiner.classList.remove("fadeup")
  quizConteiner.classList.add("glowup");
})
const questions = [
    {
        question: "Do you think it's a good idea for hospitals to have medical robots?",
        a1: "Yes",
        a2: "No",
        a3: "Maybe"
    },
    {
        question: "Would you like to be treated by a medical robot or a human doctor?",
        a1: "Medical robot",
        a2: "Human",
        a3: "Both"
    },
    {
        question: "Do you trust medical robots or people more for surgery?",
        a1: "Robots",
        a2: "Human",
        a3: "Both"
    },
    {
        question: "Do medical robots perform work more efficiently than contemporary doctors?",
        a1: "Yes",
        a2: "No",
        a3: "Maybe"
    },
    {
        question: "Do you think medical robots have the potential to cause harmful errors?",
        a1: "No",
        a2: "Yes",
        a3: "Maybe"
    },
    {
        question: "Would you prefer caring and respectful service or an automated, direct approach at a hospital?",
        a1: "Both",
        a2: "Respectful and affectionate",
        a3: "Direct and automated"
    },
    {
        question: "Which do you think ensures greater stability when delivering a diagnosis: a medical robot or a doctor?",
        a1: "Both",
        a2: "Doctor",
        a3: "Medical robot"
    },
    {
        question: "Who do you think will make more mistakes: a programmed medical robot or a medical specialist?",
        a1: "Both",
        a2: "Medical robot",
        a3: "Medical specialist"
    },
    {
        question: "Do you think medical robots offer more benefits than drawbacks?",
        a1: "Yes",
        a2: "No",
        a3: "Maybe"
    },
    {
        question: "Could doctors be more efficient than the technology medical robots offer?",
        a1: "No",
        a2: "Yes",
        a3: "Maybe"
    }
]; 

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

