/**
 * page loads: display title of game and start button
 * user clicks start button
 * 10 questions and answer choices show up on page
 * timer appears in lefthand corner and starts counting down
 * user clicks submit/timer runs out
 * questions disappear
 * results info box appears
 * //correct, incorrect, blank, score
 * score={
 * correct : 4, 
 * incorrect : 4,
 * blank : 2
 * }
 * 
 * 
 */


//Time function

$(document).ready(function () {
	var countdownTimer = {
		time: 60,
		DOM: $('#timer'),
		reset: function () {
			countdownTimer.time = 60;
		},
		start: function () {
			countdownTimer.update()
			countdownTimer.counter = setInterval(countdownTimer.count, 1000);
		},
		stop: function () {
			clearInterval(countdownTimer.counter);
		},
		update: function () {
			countdownTimer.DOM.text(countdownTimer.time)
		},
		count: function () {
			countdownTimer.time--;
			countdownTimer.update()

			if (countdownTimer.time < 1) {
				countdownTimer.stop()
				handleEndOfGame()
			}

		}
	}
	var questions = [
		{
			question: "How many claspers does a female shark have?",
			answerList: [
				{ value: "0", correct: true },
				{ value: "2", correct: false },
				{ value: "4", correct: false },
				{ value: "5", correct: false },
			]
		}, {
			question: "Which of the following is NOT a type of shark?",
			answerList: [
				{ value: "Hammerhead", correct: false },
				{ value: "Pilot Whale", correct: true },
				{ value: "Tiger", correct: false },
				{ value: "Whale Shark", correct: false },
			]
		}, {
			question: "Approximately how many species of shark are there?",
			answerList: [
				{ value: "250", correct: false },
				{ value: "470", correct: true },
				{ value: "1230", correct: false },
				{ value: "1500", correct: false },
			]
		}, {
			question: "Which is the largest type of shark?",
			answerList: [
				{ value: "Hammerhead", correct: false },
				{ value: "Blue", correct: false },
				{ value: "Tiger", correct: false },
				{ value: "Whale Shark", correct: true },
			]
		}, {
			question: "Which is the smallest type of shark?",
			answerList: [
				{ value: "Blue", correct: false },
				{ value: "Leopard", correct: false },
				{ value: "Dwarf Lantern", correct: true },
				{ value: "Angel", correct: false },
			]
		}, {
			question: "How many gills does a typical shark have on each side of its body?",
			answerList: [
				{ value: "2", correct: false },
				{ value: "4", correct: false },
				{ value: "5", correct: true },
				{ value: "8", correct: false },
			]
		}, {
			question: "Which sharks can swim in fresh water?",
			answerList: [
				{ value: "Bull", correct: true },
				{ value: "Mako", correct: false },
				{ value: "Tiger", correct: false },
				{ value: "Blue", correct: false },
			]
		}, {
			question: "Which of the following is NOT in a shark's diet?",
			answerList: [
				{ value: "Seal", correct: false },
				{ value: "Fish", correct: false },
				{ value: "Plastic", correct: true },
				{ value: "Sea Turtle", correct: false },
			]
		}, {
			question: "Which of the following sharks lives in cold water?",
			answerList: [
				{ value: "White", correct: true },
				{ value: "Nurse", correct: false },
				{ value: "Caribbean Gray Reef", correct: false },
				{ value: "Whale Shark", correct: false },
			]
		}, {
			question: "Which of the following sharks lives in Scotland?",
			answerList: [
				{ value: "Walking", correct: true },
				{ value: "Lemon", correct: false },
				{ value: "Cookiecutter", correct: false },
				{ value: "Basking", correct: false },
			]
		}
	];

	$(document).on("click", "#start", setUpGame)

	function setUpGame() {
		$("#start").hide()
		renderQuestions()
		countdownTimer.start()
		$('#submit').on("click", handleEndOfGame)
	}

	function renderQuestions() {
		var form = $('<form id="questionForm">')
		for (var i = 0; i < questions.length; i++) {
			var divHolder = $('<div>')
			var screenQuestionHolder = $('<p>').text(questions[i].question)
			divHolder.append(screenQuestionHolder)
			divHolder.append("<input type='radio' value='" + questions[i].answerList[0].correct + "' name='" + i + "'>" + questions[i].answerList[0].value + "</input> </br>")
			divHolder.append("<input type='radio' value='" + questions[i].answerList[1].correct + "' name='" + i + "'>" + questions[i].answerList[1].value + "</input> </br>")
			divHolder.append("<input type='radio' value='" + questions[i].answerList[2].correct + "' name='" + i + "'>" + questions[i].answerList[2].value + "</input> </br>")
			divHolder.append("<input type='radio' value='" + questions[i].answerList[3].correct + "' name='" + i + "'>" + questions[i].answerList[3].value + "</input> </br>")
			form.append(divHolder)
		}
		$('#questions').append(form);
	}
renderQuestions()


	function collectUserAnswers() {
		var answerForm = $('#questionForm')
		// TODO: handle result info box stuff
		var answersArray = answerForm.serializeArray()
		console.log(answersArray)
		return answersArray.map(function (answer) {
			return answer.value
		})
	}
	function handleEndOfGame(answers) {
		// hide questions
		$('#questionForm').hide()
		var answers = collectUserAnswers()
		console.log(answers)
		renderResults(answers)
		//create display box element
		//render display box

	}
	function renderResults(answers) {
		var correct = countCorrect(answers)
		var score = {
			correct: correct,
			incorrect: answers.length - correct,
			blank: 10 - answers.length

		}
		var resultDiv = $('<div>')
		var correctSpan = $('<span>').text(score.correct)
		var incorrectSpan = $('<span>').text(score.incorrect)
		var blankSpan = $('<span>').text(score.blank)
		resultDiv.append([correctSpan, incorrectSpan, blankSpan])
		$('.scoreboard').append(resultDiv)
	}
	function countCorrect(answers) {
		var count = 0
		for (var i = 0; i < answers.length; i++) {
			if (answers[i] === true) {
				count++
			}
		}
		return count
	}

});