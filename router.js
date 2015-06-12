Board.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('new-question');
  this.resource('question', {path: ':question_id'}, function(){
    this.resource('new-answer');
  });

  // this.resource('post', {path: ':post_id'}, function() {
  //   this.resource('new-comment');
  // });
  // this.resource('new-post');
  // this.resource('recent-comments');
  // this.resource('about');
  // this.resource('contact', function() {
  //   this.resource('email');
  //   this.resource('phone');
  // });
});
