import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  tagTypes: ['Please Select...','Booking Inquiry','Fan Mail'],

  actions: {
    selectMessageType() {
      const selectedEl = this.$('#message-type-select')[0]
      const selectedIndex = selectedEl.selectedIndex;
      const options = $('#message-type-select option');
      const selectedValue = options[selectedIndex].value;

      if (selectedValue == 'Fan Mail') {
        this.sendAction('selectMessageType', false);
      }

      if (selectedValue == 'Booking Inquiry') {
        this.sendAction('selectMessageType', true);
      }
    }
  }
});
