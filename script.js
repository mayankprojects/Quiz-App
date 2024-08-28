const questions = [
    {
      question: "What is the capital of France?",
      options: [
        { answer: "Paris", isCorrect: true },
        { answer: "London", isCorrect: false },
        { answer: "Rome", isCorrect: false },
        { answer: "Berlin", isCorrect: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: [
        { answer: "Earth", isCorrect: false },
        { answer: "Mars", isCorrect: true },
        { answer: "Jupiter", isCorrect: false },
        { answer: "Venus", isCorrect: false }
      ]
    },
    {
      question: "Which language is primarily used for web development?",
      options: [
        { answer: "JavaScript", isCorrect: true },
        { answer: "Python", isCorrect: false },
        { answer: "C++", isCorrect: false },
        { answer: "Java", isCorrect: false }
      ]
    },
    {
      question: "What is the largest mammal in the world?",
      options: [
        { answer: "Elephant", isCorrect: false },
        { answer: "Blue Whale", isCorrect: true },
        { answer: "Giraffe", isCorrect: false },
        { answer: "Shark", isCorrect: false }
      ]
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: [
        { answer: "China", isCorrect: false },
        { answer: "Japan", isCorrect: true },
        { answer: "South Korea", isCorrect: false },
        { answer: "India", isCorrect: false }
      ]
    }
  ];

  let ques = document.getElementById('question');
  let ans = document.getElementById('answers');
  let next = document.getElementById('next');

  let index = 0;
  let count = 0;

  function startQuiz()
  {
    index = 0;
    count = 0;
    next.innerHTML = "Next";
    showQuestion();
  }

  function showQuestion()
  {
    resetState();
    let currQues = questions[index];
    let quesNo = index + 1;
    ques.innerHTML = quesNo + '. ' + currQues.question;

    currQues.options.forEach(opt => {
        const button = document.createElement("button");
        button.innerHTML = opt.answer;
        button.classList.add("border-2", "border-black", "h-12", "text-left", "p-2", "text-gray-800", "font-mono", "pl-5", "text-lg", "m-5", "rounded-lg", "hover:bg-black", "hover:text-slate-300")
        ans.appendChild(button);

        if(opt.isCorrect){
            button.dataset.correct = opt.isCorrect;
        }
        button.addEventListener("click", (e) => {
            const selectBtn = e.target;
            const check = selectBtn.dataset.correct === "true";
            if(check){
                selectBtn.classList.add("bg-green-300");
                count++;
            }else{
                selectBtn.classList.add("bg-red-300");
            }

            Array.from(ans.children).forEach(button => {
                if(button.dataset.correct === "true"){
                    button.classList.add("bg-green-300")
                }
                button.disabled = true;
            });
            next.style.display = "block";
        })
    })
  }

  function resetState()
  {
    next.style.display = "none";
    while(ans.firstChild)
    {
        ans.removeChild(ans.firstChild);
    }
  }

  function showScore(){
    resetState();
    ques.innerHTML = `You Scored ${count} out of ${questions.length}`;
    next.innerHTML = "Play Again";
    next.style.display = "block";
  }

  function handleNext(){
    index++;
    if(index < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }

  }

  next.addEventListener('click', ()=>{
    if(index < questions.length){
        handleNext();
    }else{
        startQuiz();
    }
    
  })

  startQuiz();