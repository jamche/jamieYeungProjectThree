// data

// get data of questions in
const questionData = [
  // first question data
  {
    question: 'In which of the city or cities below is tap water not drinkable?', 
    option: ['Bogota','Medellin','Cartagena','All of the above']
  },
  // second question data
  {
    question:'What is the approximate amount of Colombians that use Uber(Total Population is ~49.07 million?)', 
    option:['1 mil, 2.3 mil, more than 50% , No one it\'s illegal']
  }
]
// const answerData = [
//   // first answer
//   {

//   }
// ]

  // third question data
  // fourth question data
  // fifth question data

// 1st step
//insert the option from questionData value to the form as radio buttons from the array
// get the select/radio button to take the value from the questionData.option array and display on page
// make function to create html for each options of each question


// create question to input on page
const quizQuestion = questionData[0].question;
console.log(quizQuestion);
$('.qTitle').append(quizQuestion);

// create label and input
// const label = $(`<label>`).text(`${questionData[0].option[1]}`);
// const radioInput = $(`<input type="radio">`).attr({ id: 'from', name: 'from' });
questionData[0].option.forEach((choice) => {
  $('.options').append($(`<label> for=choice`).text(choice));
  $('.options').append($(`<input type="radio">`).attr({ id: choice, name: 'choice' }))
});
// how to get value of the radio button to return the aray information
$('.choiceBox').on('submit', function(e){
  e.preventDefault();
  const radioValue = $('input[type="submit"]:checked').val();
  
  console.log(radioValue)

})
//   const answer = $
//   if(radioValue === )
// })

// 
//   function questionData(){
      
//     }
// 




// button function
$(function(){

 



});


// 2nd step
// make the selected choice compare vs questionData.answer





// have radio button = value of the option button
// to find value of checked or selected radio button
// compare the choice of the user from select button  to the answer
// if answer is correct, indicate that answer is correct and display text of information
// add a point if choice === answer, don't add any point if choice is !== answer and ensure point is stored
