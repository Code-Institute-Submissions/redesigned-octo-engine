import Controller from '@ember/controller';

/*eslint-env jquery*/
/* global Ember */

export default Controller.extend({

  isMickyDolenz: false,
  isPeterTork: false,
  isDavyJones: false,
  isMichaelNesmith: false,

  actions: {
    pinterestImage: function(event) {
      //let testText = this.get('pinterest').pinImage(event);
      this.get('pinterest').pinImage(event);
      //this.set('message',testText);
    },
    toggleMickyDolenz() {
      this.toggleProperty('isMickyDolenz');
      this.set('isPeterTork', false);
      this.set('isDavyJones', false);
      this.set('isMichaelNesmith', false);
      Ember.$('#micky-dolenz-name').toggleClass("member-name-white member-name-orange");

      Ember.$('#peter-tork-name').removeClass("member-name-orange");
      Ember.$('#davy-jones-name').removeClass("member-name-orange");
      Ember.$('#michael-nesmith-name').removeClass("member-name-orange");

      Ember.$('#peter-tork-name').addClass("member-name-white");
      Ember.$('#davy-jones-name').addClass("member-name-white");
      Ember.$('#michael-nesmith-name').addClass("member-name-white");

    },
    togglePeterTork() {
      this.toggleProperty('isPeterTork');
      this.set('isMickyDolenz', false);
      this.set('isDavyJones', false);
      this.set('isMichaelNesmith', false);
      Ember.$('#peter-tork-name').toggleClass("member-name-white member-name-orange");

      Ember.$('#micky-dolenz-name').removeClass("member-name-orange");
      Ember.$('#davy-jones-name').removeClass("member-name-orange");
      Ember.$('#michael-nesmith-name').removeClass("member-name-orange");

      Ember.$('#micky-dolenz-name').addClass("member-name-white");
      Ember.$('#davy-jones-name').addClass("member-name-white");
      Ember.$('#michael-nesmith-name').addClass("member-name-white");
    },
    toggleDavyJones() {
      this.toggleProperty('isDavyJones');
      this.set('isPeterTork', false);
      this.set('isMickyDolenz', false);
      this.set('isMichaelNesmith', false);
      Ember.$('#davy-jones-name').toggleClass("member-name-white member-name-orange");

      Ember.$('#peter-tork-name').removeClass("member-name-orange");
      Ember.$('#micky-dolenz-name').removeClass("member-name-orange");
      Ember.$('#michael-nesmith-name').removeClass("member-name-orange");

      Ember.$('#peter-tork-name').addClass("member-name-white");
      Ember.$('#micky-dolenz-name').addClass("member-name-white");
      Ember.$('#michael-nesmith-name').addClass("member-name-white");
    },
    toggleMichaelNesmith() {
      this.toggleProperty('isMichaelNesmith');
      this.set('isPeterTork', false);
      this.set('isDavyJones', false);
      this.set('isMickyDolenz', false);
      Ember.$('#michael-nesmith-name').toggleClass("member-name-white member-name-orange");

      Ember.$('#peter-tork-name').removeClass("member-name-orange");
      Ember.$('#davy-jones-name').removeClass("member-name-orange");
      Ember.$('#micky-dolenz-name').removeClass("member-name-orange");

      Ember.$('#peter-tork-name').addClass("member-name-white");
      Ember.$('#davy-jones-name').addClass("member-name-white");
      Ember.$('#micky-dolenz-name').addClass("member-name-white");
    }


  }

});
