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
          window.audioTrack.src = "assets/audio/HomeFront-20160209-9February1916.mp3";
          window.audioTrack.play();
          this.toggleProperty('isTrackPlaying');

        } catch (e) {

            try {
              window.audioTrack = new Audio();
              window.audioTrack.src = "assets/audio/HomeFront-20160209-9February1916.ogg";
              window.audioTrack.play();
              this.toggleProperty('isTrackPlaying');

            } catch (e) {

              Ember.$('#play-track').text("Sorry Audio Not Supported");

            }

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
