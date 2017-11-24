import Ember from 'ember';

export default Ember.Component.extend({

  isMobileMenu: false,

  actions: {
    showMenu() {
      Ember.$('.header-links').attr('style','display:block');
      this.toggleProperty('isMobileMenu');
    },

    hideMenu() {
      Ember.$('.header-links').attr('style','none');
      this.toggleProperty('isMobileMenu');
    },

    play() {

        try {

          let audioTrack = new Audio();
          audioTrack.src = "assets/audio/1914DayByDay-20140627-27thJune.mp3";
          audioTrack.play();
          Ember.$('#play-track').text("Playing");
        } catch (e) {

          Ember.$('#play-track').text("Sorry Audio Not Supported");

        }
    }

  }
});
