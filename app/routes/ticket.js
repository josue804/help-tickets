import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  },

  actions: {
    deleteTicket(ticket) {
      ticket.destroyRecord();
      this.transitionTo('teacher');
    }
  }
});
