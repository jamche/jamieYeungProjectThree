const questionData = [
  // first question data
  {
    question: 'In which of the city or cities below is tap water not drinkable?',
    option: ['Bogota', 'Medellin', 'Cartagena', 'All of the above'],
    answer: 'Cartagena',
    answerText: 'Correct! Since Cartagena is in the coastal region of Colombia, tap water is not drinkable. In Bogota & Medellin, tap water drinkable as they are located within the mountainous regions of the country. So save money and the environment by filling up your bottle!'
  },
  // second question data
  {
    question: 'What is the approximate amount of Colombians that use Uber(total Population is about ~49.07 million?)',
    option: ['1 mil', '2 mil', '3 mil', 'Isn\'t Uber illegal in Colombia?'],
    answer: '2 mil',
    answerText:'Well done! There are about ~2 million people and counting that use uber throughout the country(mostly in major cities) even if it is illegal. Even if you are caught using Uber, the onus is on the driver and not the rider. Esssentially you will be told to get out of the car and move along. '
  },
  // third question data
  {
    question: 'Since we all need to eat at some point, what would the average cost of a typical meal be in Colombia',
    option: ['2$ - 4$', '5$ - 9$', '10$ - 14.5$', '14.5$ - 20$'],
    answer: '5$ - 9$',
    answerText: 'Correct! In most cities you can go in to any restaurant and order what they call a "Menu del Dia", which is a typical Colombian dish that contains rice, beans, meat/fish and vegetables.'
  },
  // fourth question data

  {
    question: 'What would be the typical cost to fly between any major cities within Colombia',
    option: ['5$-10$', '11$-41$', '41$-61$', '+62$'],
    answer: '11$-41$',
    answerText: 'Nice! Flights within Colombia are super cheap! Even if booked a few days beforehand, flights can sometimes cost less than $20 for a 1-2 hour flight. Which, in comparison to an 8 hour bus ride that costs the same sounds like a way better option.'
  },
  // fifth question
  {
    question: 'There is a saying in Colombia that goes likes" No des papaya" which translates to "Don\'t give papaya". What does this mean? ',
    option: ['It\'s illegal to buy papayas', 'I shouldn\'t give my papayas to anyone', 'I shouldn\'t buy fruits on the street', 'Don\'t give an opportunity to be pickpocketed' ],
    answer: 'Don\'t give an opportunity to be pickpocketed',
    answerText: 'Correct! Colombia is safer than ever to visit. But there are still issues with pickpockets. Just be aware of your surroundings and ensure you keep your valuables out of reach!'
  }
]
// go thorugh array
let count = 0;  
// for completed
let j = 0;

function displayQuestion(question) {
  
  $('.q-title').append(question[count].question);
  
  for (let i = 0; i < questionData[count].option.length; i++) {
  //makes the choice show up on the page
    $('.options').append($(`<div> <label> for=choice title </label>`).text(questionData[count].option[i])) +
  //makes the input show up 
    $('.options').append($(`<input type="radio" value="${questionData[count].option[i]}"</div>`).attr({ id: 'answer', name: 'choice'}));
  }
}
// submit button that compares values if correct/incorrect
$('.choice-box').on('submit', function (e) {
  e.preventDefault();
  const radioValue = $('input[type="radio"]:checked').val();
  if (radioValue === questionData[count].answer) {
    $('.answer-box').append($(`<p>${questionData[count].answerText}</p>`));
    // show next button when submit button is hit
    $('#next').css('visibility','visible');
    // hide submit button when submit is hit and answer is correct
    $('input').css('display','none');
    j++;
  }else{
      alert('Incorrect, pick another option and/or Pick an option');
  }
  
    // count the answer +1 if correct
    // 
    // keep count of questions completed
    // display message at end
    if (j === 5) {
    alert('You\'ve completed the quiz! Hopefully you learned a bit more about Colombia in case you end up visiting the country. Come back later for more quizzes for other countries!');

    $('#next').css('display', 'none');
    $('.button-container').append($(`<a>Home</a>`).attr('href','index.html'));
    }
})

const next = $('#next');
// clear content of first question and go to next & make it count up a question
$(next).on('click', function (event) {
  $('#next').css('visibility', 'hidden');
  $('input').css('display', 'initial');
  event.preventDefault();
  $('.q-title').html('');
  $('.options').html('');
  $('.answer-box').html('');
  count++;
  displayQuestion(questionData);
  
});

// run the damn thing
$(function(){

  displayQuestion(questionData);

});