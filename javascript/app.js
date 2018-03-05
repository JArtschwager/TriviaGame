



var questions = [];
var queryURL = "https://opentdb.com/api.php?amount=20&category=22&difficulty=medium&type=multiple";
var currentQuestion = 0;
//gify api key https://api.giphy.com/v1/gifs/search?api_key=yZNwu1yeW43l6qLRlbla9i8S56ZkLL4O&q=&limit=25&offset=0&rating=G&lang=en

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    //console.log(response);
    // var question1 = $("<h1>").text(response.question)
    questions = response.results;
    console.log(questions);

    nextQuestion();
})


var nextQuestion = function(){
    currentQuestion++;
    $(".question").text(questions[currentQuestion].question);
//all answers = to incorrect answers
    var allAnswers = questions[currentQuestion].incorrect_answers; 
    //adding the correct answer to all answers
    allAnswers.push(questions[currentQuestion].correct_answer);
    //displaying the correct and incorrect answers
    // $(".answer").text(allAnswers);

    for (var i = 0; i < allAnswers.length; i++) {
        var answers = $(".answers");
        var button = $("<A>");
        button.attr("href", "#");
        button.attr("title", "");
        button.text(allAnswers[i]);
        button.addClass("btnlink");
        button.appendTo(answers);
    }

}

$(".btnlink").on("click", function() {
    //refer to the button that was clikced which will change everytime, this is why you use this.
    var answer = $(this).text();
    if (questions[currentQuestion].correct_answer === answer) {
        console.log(answer + "you win");
     } else { 
        nextQuestion();
}})



//timer section class name is timeRemaining.
//change the window.onload to be a part of the next question function.
//window.onload = function() {
  //  $("#timer").on("click", timer.start);
//};
//watch variable.  equal to false so the code will start running
//var clockRunning = false;
 
//the timer object
//var timer = {
//    time: 0,
//}

//reset: function() {
  //  timer.time = 0;
//}


//pseudo coding.

//first create a timer that will count down 30 seconds

//on first count down, have a question pop up with multiple answer options that you could slicp.

//start a for loop of the questiosn from the website API.  