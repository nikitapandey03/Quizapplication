const quizData = [{
    question: "What does CPU stand for?",
    a: " Computer Power Unit",
    b: "Control Panel Utility",
    c: " Central Program Unit",
    d: "Central Processing Unit",
    correct: "d",
},
{
    question: "Which device is used to input text into a computer?",
    a: "Keyboard",
    b: "Monitor",
    c: "Mouse",
    d: "Printer",
    correct: "a",
},
{
    question: "What is the full form of Wi-Fi?",
    a: "Wireless file",
    b: "Wireless Fidelity",
    c: " Wide File",
    d: "Web Finder",
    correct: "b",
},
{
    question: "Which of the following is a web browser?",
    a: "Windows",
    b: "Chrome",
    c: "Android",
    d: "Photoshop",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100">
         You've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
  