import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  question: DS.attr(),
  timeSubmitted: DS.attr(),
  subject: DS.attr()
});
