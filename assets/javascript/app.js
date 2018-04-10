//Time function

$(document).ready(function () {
	var i = 0;
	var countdownTimer = {
		time: 60,
		DOM: $('#timer'),
		reset: function () {
			console.log("resetting timer")
			countdownTimer.time = 60;

		},
		start: function () {
			console.log("starting timer")
			countdownTimer.update()
			countdownTimer.counter = setInterval(countdownTimer.count, 1000);
		},
		stop: function () {
			console.log("stopping timer")
			clearInterval(countdownTimer.counter);
		},
		update: function () {
			countdownTimer.DOM.text(countdownTimer.time)
		},

		count: function () {
			console.log("decrementing time")
			countdownTimer.time--;
			console.log(countdownTimer.time);
			countdownTimer.update()

			if (countdownTimer.time < 1) {
				console.log("Timer is below 1")

				countdownTimer.stop()
				collectUserAnswers()
				$('#questionForm').hide()
			}

		}
	};

	// Questions, answer choices, and correct answer in array called questions

	var questions = [{
		question: "How many claspers does a female shark have?",
		answerList: ["0", "2", "4", "5"],
		answer: "0"
	}, {
		question: "Which of the following is NOT a type of shark?",
		answerList: ["Hammerhead", "Pilot Whale", "Tiger", "Whale Shark"],
		answer: "Pilot Whale"
	}, {
		question: "Approximately how many species of shark are there?",
		answerList: ["250", "470", "1250", "1500"],
		answer: "470"
	}, {
		question: "Which is the largest type of shark?",
		answerList: ["Hammerhead", "Blue", "Tiger", "Whale Shark"],
		answer: "Whale Shark"
	}, {
		question: "Which is the smallest type of shark?",
		answerList: ["Blue", "Leopard", "Dwarf Lantern", "Angel"],
		answer: "Dwarf Lantern"
	}, {
		question: "How many gills does a typical shark have?",
		answerList: ["2", "4", "5", "8"],
		answer: "5"
	}, {
		question: "Which sharks can swim in fresh water?",
		answerList: ["Bull", "Mako", "Tiger", "Blue"],
		answer: "Bull"
	}, {
		question: "Which of the following is NOT in a shark's diet?",
		answerList: ["Seal", "Fish", "Plastic", "Sea Turtle"],
		answer: "Plastic"
	}, {
		question: "Which of the following sharks lives in cold water?",
		answerList: ["White", "Nurse", "Caribbean Gray Reef", "Whale Shark"],
		answer: "White"
	}, {
		question: "Which of the following sharks lives in Scotland?",
		answerList: ["Walking", "Lemon", "Cookiecutter", "Basking"],
		answer: "Basking"
	}];




	// When user presses START button, new page with questions loads
	$(document).on("click", "#start", function () {
		$("#start").hide()
		// $(".panel").show()
		var form = $('<form id="questionForm">')
		for (var i = 0; i < questions.length; i++) {

			var divHolder = $('<div>')
			var screenQuestionHolder = $('<p>').text(questions[i].question)
			divHolder.append(screenQuestionHolder)



			divHolder.append("<input type='radio' value='" + questions[i].answerList[0] + "' name='" + i + "'>" + questions[i].answerList[0] + "</input> </br>")
			divHolder.append("<input type='radio' value='" + questions[i].answerList[1] + "' name='" + i + "'>" + questions[i].answerList[1] + "</input> </br>")
			divHolder.append("<input type='radio' value='" + questions[i].answerList[2] + "' name='" + i + "'>" + questions[i].answerList[2] + "</input> </br>")
			divHolder.append("<input type='radio' value='" + questions[i].answerList[3] + "' name='" + i + "'>" + questions[i].answerList[3] + "</input> </br>")
			form.append(divHolder)

		}
		$('#questions').append(form);
		countdownTimer.start()


	})

	
// 	function collectUserAnswers() {
// 		var answerForm = $('#questionForm')

// 		var answersArray = answerForm.serializeArray()

// 	}
// 	$('#submit').on("click", collectUserAnswers)
// 	console.log(answersArray)
// })
// 	// function compareAnswers() {
	// 	for (var j = 0; j < answersArray.length; j++){
	// 		if answersArray[j] === TK
	// 	}
	// }

	// 	// Make variables for the scoreboard
	// 	var correct = 0
	// 	var incorrect = 0
	// 	var blank = 0

	// Append userGuess array with each new answer chosen
	// $(document).on("click", function () {
	// .appd[userGuess]
	// }

	// Compare userGuess to correct answer
	// if (userGuess[i] === answer[i]) {
	// 		correct++
	// 	}
	// 	else if (userGuess[i] !== answer[i]) {
	// 		incorrect++
	// 	}
	// 	else (blank++)

	// 	// Final scoreboard page with final scores for variables correct, incorrect, blank

	// 	// CLICK EVENTS
	// 	$(document).on("click", "#start", function () {
	// 		game.start();
	// 	});
	// 	$(document).on("click", "#done", function () {
	// 		game.done();
	// 	}

});