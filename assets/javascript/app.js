var panel = $('#quiz-area');

$(document).on('click', '#start', function(e){
  game.start();
});

$(document).on('click', '#done', function(e){
  game.done();
});

//question set

var questions = [{
  question: "How does Han save Luke at the start of 'The Empire Strikes Back'",
  answers: ['He kills an imperial storm trooper', 'He pushes him out of the way', 'He gives him CPR', 'He stuffs him in a dead tauntaun'],
  correctAnswer: "He stuffs him in a dead tauntaun",
}, {
  question: "Robert De Niro, Jonathan Pryce, and Bob Hoskins all appear in this 1985 sci-fi satire:",
  answers: ['Spaceballs', 'Brazil', 'Time Bandits', 'Innerspace'],
  correctAnswer: "Brazil",
}, {
  question: "The name of the ship in 'Alien' is:",
  answers: ["Explorer", "Nostromo", "Prometheus", "Ranger 3"],
  correctAnswer: "Nostromo",
}, {
  question: "How many gigawatts of electricity does Doc Brown need to send Marty back to the future?",
  answers: ["2.12", "1.12", "2.22", "1.21"],
  correctAnswer: "1.21",
}, {
  question: "What's RoboCop's real name?",
  answers: ["Murphy", "McMurray", "McDonald", "Murray"],
  correctAnswer: "Murphy",
}, {
  question: "Which sci-fi movie did Steven Spielberg NOT direct?",
  answers: ["Minority Report", "Blade Runner", "A.I. Artificial Intelligence", "War of the Worlds"],
  correctAnswer: "Blade Runner",
}, {
  question: "Who plays Khan in 'Star Trek II: The Wrath of Khan'?",
  answers: ["Harry Belafonte", "Christopher Walken", "Ricardo Montalban", "Terence Stamp"],
  correctAnswer: "Ricardo Montalban",
}];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }
    panel.append('<button id="done">Done</button>');
  },
  done: function(){

    $.each($("input[name='question-0']:checked"), function(){
       if ($(this).val() == questions[0].correctAnswer) {
        console.log(this);
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-1']:checked"), function(){
       if ($(this).val() == questions[1].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-2']:checked"), function(){
       if ($(this).val() == questions[2].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
 $.each($("input[name='question-3']:checked"), function(){
       if ($(this).val() == questions[3].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
 $.each($("input[name='question-4']:checked"), function(){
       if ($(this).val() == questions[4].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
 $.each($("input[name='question-5']:checked"), function(){
       if ($(this).val() == questions[5].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
 $.each($("input[name='question-6']:checked"), function(){
       if ($(this).val() == questions[6].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    this.results();
  },


    results:function(){
      clearInterval(timer);

      $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');

    }


  };
