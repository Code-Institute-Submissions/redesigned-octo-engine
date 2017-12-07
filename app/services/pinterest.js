import Ember from 'ember';
import Service from '@ember/service';

/*eslint-env jquery*/
/* global PDK */

export default Service.extend({

  pinImage: function(event) {

    let pictureUrl = Ember.$("#" + Ember.$(event.target).parent().parent().attr('id')).children('img').attr('src');

    PDK.pin(pictureUrl);

  }


});
