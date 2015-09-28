import Ember from 'ember';

export function timeSubmitted(params/*, hash*/) {
  var currentTime = new Date();
  return currentTime.getHours().toString() + ":" + currentTime.getMinutes().toString();
}

export default Ember.Helper.helper(timeSubmitted);
