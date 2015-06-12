Board.Question = DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  Answers: DS.hasMany('answer', {async: true})

});
