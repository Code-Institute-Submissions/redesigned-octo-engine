import Ember from 'ember';

/*eslint-env jquery*/

export default Ember.Component.extend({

  isMobileMenu: false,
  isTrackPlaying: false,

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
          window.audioTrack = new Audio();
          window.audioTrack.src = "assets/audio/1914DayByDay-20140627-27thJune.mp3";
          window.audioTrack.play();
          this.toggleProperty('isTrackPlaying');

        } catch (e) {

          Ember.$('#play-track').text("Sorry Audio Not Supported");

        }
    },
    stop() {

        try {
          window.audioTrack.pause();
          this.toggleProperty('isTrackPlaying');
        } catch (e) {

          Ember.$('#stop-track').text("Sorry Audio Not Supported");

        }
    },
  }
});
