import Controller from '@ember/controller';

/*eslint-env jquery*/
/* global Ember */

export default Controller.extend({

  isMickyDolenzHeading: true,
  isPeterTorkHeading: true,
  isDavyJonesHeading: true,
  isMichaelNesmithHeading: true,

  isMickyDolenzParagraph: false,
  isPeterTorkParagraph: false,
  isDavyJonesParagraph: false,
  isMichaelNesmithParagraph: false,

  actions: {
    pinterestImage: function(event) {
      //let testText = this.get('pinterest').pinImage(event);
      this.get('pinterest').pinImage(event);
      //this.set('message',testText);
    },
    toggleMickyDolenz() {
      this.toggleProperty('isMickyDolenzParagraph');

      this.toggleProperty('isPeterTorkHeading');
      this.toggleProperty('isDavyJonesHeading');
      this.toggleProperty('isMichaelNesmithHeading');

      this.set('isPeterTorkParagraph', false);
      this.set('isDavyJonesParagraph', false);
      this.set('isMichaelNesmithParagraph', false);
      Ember.$('#micky-dolenz-name').toggleClass("member-name-white member-name-orange");

      Ember.$('#peter-tork-name').removeClass("member-name-orange");
      Ember.$('#davy-jones-name').removeClass("member-name-orange");
      Ember.$('#michael-nesmith-name').removeClass("member-name-orange");

      Ember.$('#peter-tork-name').addClass("member-name-white");
      Ember.$('#davy-jones-name').addClass("member-name-white");
      Ember.$('#michael-nesmith-name').addClass("member-name-white");

    },
    togglePeterTork() {
      this.toggleProperty('isPeterTorkParagraph');

      this.toggleProperty('isMickyDolenzHeading');
      this.toggleProperty('isDavyJonesHeading');
      this.toggleProperty('isMichaelNesmithHeading');

      this.set('isMickyDolenzParagraph', false);
      this.set('isDavyJonesParagraph', false);
      this.set('isMichaelNesmithParagraph', false);
      Ember.$('#peter-tork-name').toggleClass("member-name-white member-name-orange");

      Ember.$('#micky-dolenz-name').removeClass("member-name-orange");
      Ember.$('#davy-jones-name').removeClass("member-name-orange");
      Ember.$('#michael-nesmith-name').removeClass("member-name-orange");

      Ember.$('#micky-dolenz-name').addClass("member-name-white");
      Ember.$('#davy-jones-name').addClass("member-name-white");
      Ember.$('#michael-nesmith-name').addClass("member-name-white");
    },
    toggleDavyJones() {
      this.toggleProperty('isDavyJonesParagraph');

      this.toggleProperty('isPeterTorkHeading');
      this.toggleProperty('isMickyDolenzHeading');
      this.toggleProperty('isMichaelNesmithHeading');

      this.set('isPeterTorkParagraph', false);
      this.set('isMickyDolenzParagraph', false);
      this.set('isMichaelNesmithParagraph', false);
      Ember.$('#davy-jones-name').toggleClass("member-name-white member-name-orange");

      Ember.$('#peter-tork-name').removeClass("member-name-orange");
      Ember.$('#micky-dolenz-name').removeClass("member-name-orange");
      Ember.$('#michael-nesmith-name').removeClass("member-name-orange");

      Ember.$('#peter-tork-name').addClass("member-name-white");
      Ember.$('#micky-dolenz-name').addClass("member-name-white");
      Ember.$('#michael-nesmith-name').addClass("member-name-white");
    },
    toggleMichaelNesmith() {
      this.toggleProperty('isMichaelNesmithParagraph');

      this.toggleProperty('isPeterTorkHeading');
      this.toggleProperty('isDavyJonesHeading');
      this.toggleProperty('isMickyDolenzHeading');

      this.set('isPeterTorkParagraph', false);
      this.set('isDavyJonesParagraph', false);
      this.set('isMickyDolenzParagraph', false);
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
