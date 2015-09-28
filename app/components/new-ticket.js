import Ember from 'ember';

export default Ember.Component.extend({
  newTicketForm: true,

  actions: {

    ticketFormHide() {
      this.set('newTicketForm', false);
    },

    createTicket() {
      var currentTime = new Date();
      var formattedTime = currentTime.getHours().toString() + ":" + currentTime.getMinutes().toString();
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        subject: this.get('subject'),
        timeSubmitted: formattedTime
      }
      this.sendAction('createTicket', params);
      this.set('newTicketForm', false);
    },

    deleteTicket() {
      this.sendAction('deleteTicket');
    }
  }
});
