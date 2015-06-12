Board.Answer = DS.Model.extend({
  poster: DS.attr(),
  text: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
