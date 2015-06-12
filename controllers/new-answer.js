Board.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    addAnswer: function() {
      var answer = this.store.createRecord('answer', {
        poster: this.get('poster'),
        text: this.get('text')
      });

      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();

      this.transitionToRoute('question', question.id);
      this.set('poster', " ");
      this.set('text', " ");

    }
  }
});
