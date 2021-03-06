import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('teacher');
  this.route('student');
  this.route('ticket', {path: '/ticket/:ticket_id'});
});

export default Router;
