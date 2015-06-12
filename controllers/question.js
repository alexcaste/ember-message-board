Board.QuestionController = Ember.ObjectController.extend({

  isEditing: false,
  actions: {
    editQuestion: function() {
    this.set('isEditing', true);
    },

    saveQuestion: function() {
      this.get('model').save();
      this.set('isEditing',false);
    },
    deleteQuestion: function() {
      if (confirm('Are you sure?')) {

        var answers = this.get('answers'),
          list = answers.toArray();

          list.forEach(function(answer) {
          answer.destroyRecord();
          answers.removeObject(answer);
        });

        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },

    deleteAnswer: function(answer) {

     if (confirm('Are you sure?')){
       var question = this.get('model');
       question.get('answers').removeObject(answer);
       question.save();
       answer.deleteRecord();
       answer.save();
       this.transitionToRoute('question', this.get('id'));
     }
   },
  }
});
