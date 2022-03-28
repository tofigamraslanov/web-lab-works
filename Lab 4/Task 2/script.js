const questionTitle = document.getElementById('question-title');
const container = document.querySelector('.container');
const numberOfCorrectAnswers = document.getElementById(
  'numberOfCorrectAnswers'
);
const btnSubmit = document.getElementById('submit');
const result = document.querySelector('.result');

let correctAnswers = 0;

const questions = [
  {
    question: 'Which answer represents length of equator line?',
    answers: ['40.075 kilometers', '5 kilometers', '20.190 kilometers'],
    true: '40.075 kilometers',
  },
  {
    question: 'Which one of the best programming language ever?',
    answers: ['C', 'Java', 'Python'],
    true: 'C',
  },
  {
    question: 'How many students study in 682.19E?',
    answers: ['20', '25', '29'],
    true: '29',
  },
];

questions.forEach(question => {
  const questionElement = document.createElement('div');
  questionElement.innerHTML = `<h2>${question.question}</h2>`;
  container.appendChild(questionElement);

  question.answers.forEach((answer, index) => {
    const answerElement = document.createElement('div');
    answerElement.className = 'answer';
    answerElement.innerHTML = `<p>${answer}</p>`;
    questionElement.appendChild(answerElement);

    answerElement.addEventListener('click', () => {
      if (answer === question.true) {
        answerElement.style.color = '#31cc31';
        correctAnswers++;
        return;
      } else {
        answerElement.style.color = '#f00';
      }
    });
  });
});

btnSubmit.addEventListener('click', () => {
  numberOfCorrectAnswers.innerText = correctAnswers;
  result.style.display = 'block';
});
