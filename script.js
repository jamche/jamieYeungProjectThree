const questionData = [
  // first question data
  {
    question: 'In which of the city or cities below is tap water not drinkable?',
    option: ['Bogota', 'Medellin', 'Cartagena', 'All of the above'],
    answer: 'Cartagena',
    answerText: 'Correct answer. Since Cartagena is in the coastal region of Colombia, tap water is not drinkable. In cities such Bogota & Medellin, it is drinkable as they are located within the mountainous regions, where the source of water is from.'
  },
  // second question data
  {
    question: 'What is the approximate amount of Colombians that use Uber(Total Population is ~49.07 million?)',
    option: ['1 mil', '2 mil', '3 mil', 'Isn\'t Uber illegal in Colombia?'],
    answer: '2 mil',
    answerText:'Well done! There are about 2 million people and counting that use uber throughout the country(mostly in major cities) even if it is illegal. Uber is still cheaper than the other options that are currently available to travel throughout a major city. '
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
    option: ['5$-10$', '11$-41$', '41$-61$', '62$'],
    answer: '11$-41$',
    answerText: 'Correct! Flights within Colombia are super cheap! Even if booked a few days beforehand, flights can cost sometimes less than $20 for a 1-2 hour flight. Which, in comparison to an 8 hour bus ride with a similar cost sounds much better.'
  },
  // fifth question
  {
    question: 'There is a saying in Colombia that goes likes" No des papaya" which translates to "Don\'t give papaya". What does this mean? ',
    option: ['If i bought a papaya, don\'t share it', 'I shouldn\'t give my papaya to anyone', 'I shouldn\'t buy fruits on the street', 'Don\'t give an opportunity to be pickpocketed' ],
    answer: 'Don\'t give an opportunity to be pickpocketed',
    answerText: 'Correct! Colombia is safer than ever to visit. But there are still issues with pickpockets. So one should always ensure that they always keep their valuables out of reach.'
  }
]

// const questionData = undefined;
let count = 0;  
// for completed
let j = 0;

function displayQuestion(question) {
  
  $('.qTitle').append(question[count].question);
  console.log(question[count].question);
  
  for (let i = 0; i < questionData[count].option.length; i++) {
  //makes the choice show up on the page
    $('.options').append($(`<div> <label> for=choice </label>`).text(questionData[count].option[i])) +
    console.log(question[count].option[i]);
  //makes the input show up 
    $('.options').append($(`<input type="radio" value="${questionData[count].option[i]}"</div>`).attr({ id: 'answer', name: 'choice'}));
  }
}
// submit button that compares values if correct/incorrect
$('.choiceBox').on('submit', function (e) {
  e.preventDefault();
  const radioValue = $('input[type="radio"]:checked').val();
  if (radioValue === questionData[count].answer) {
    $('.answerBox').append($(`<p>${questionData[count].answerText}</p>`));
    // show next button when submit button is hit
    $('#next').css('visibility','visible');
    // hide submit button when submit is hit and answer is correct
    $('input').css('display','none');
    j++;
    console.log(j);
    console.log('You picked the right option');
  }else{
      alert('Incorect, pick another option and/or Pick an option');
  }
  
    // count the answer +1 if correct
    // 
    // keep count of questions completed
    
    if (j === 5) {
    alert('You\'ve completed the quiz! Hopefully you learned a bit more about Colombia in case you end up visiting the country. Come back later for more quizzes for other countries!');

    $('#next').css('display', 'none');
    $('.buttonContainer').append($(`<a>Home</a>`).attr('href','index.html'));
    }
})

const next = $('#next');
// clear content of first question and go to next & make it count up a question
$(next).on('click', function (event) {
  $('#next').css('visibility', 'hidden');
  $('input').css('display', 'initial');
  event.preventDefault();
  $('.qTitle').html('');
  $('.options').html('');
  $('.answerBox').html('');
  count++;
  displayQuestion(questionData);
  
});

// run the damn thing
$(function(){

  displayQuestion(questionData);
  

});