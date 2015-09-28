import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('ticket');
  },

  actions: {
    deleteTicket(ticket) {
      this.sendAction("deleteTicket", ticket);
    }
  }
});
