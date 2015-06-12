Board.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'questions/:question_id'}, function(){
    this.resource('new-answer');
    this.resource('answer', {path: 'answers/:answer_id'})
  });
  this.resource('new-question');
});
