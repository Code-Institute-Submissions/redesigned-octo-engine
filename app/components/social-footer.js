import Ember from 'ember';
import Component from '@ember/component';
import { inject as service } from '@ember/service';

/*eslint-env jquery*/

export default Component.extend({

  currentUrl: service(),

  actions: {
    facebookShare: function() {
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.get('currentUrl').windowUrl()) + "&t=Great%20Live%20Band" ) ;
    },
    twitterShare: function() {
      window.open("https://twitter.com/intent/tweet?text=Check%20out%20this%20great%20band&url=" + this.get('currentUrl').windowUrl());
    },
    instagramShare: function() {
      window.open("https://www.instagram.com/themonkees/");
    },
    mouseEnterTwitter() {
      Ember.$('#facebook-i').toggleClass("icons-div icons-div-show");
      Ember.$('#instagram-i').toggleClass("icons-div icons-div-show");
      Ember.$('#twitter-div').toggleClass("twitter-icon twitter-icon-show");
    },
    mouseLeaveTwitter() {

      Ember.$('#facebook-i')
        .delay(5000)
        .queue(function() {
          $(this).toggleClass("icons-div-show icons-div").dequeue(); // eslint-disable-line no-use-before-define
        });
      Ember.$('#instagram-i')
        .delay(5000)
        .queue(function() {
          $(this).toggleClass("icons-div-show icons-div").dequeue(); // eslint-disable-line no-use-before-define
        });
      Ember.$('#twitter-div')
        .delay(5000)
        .queue(function() {
          $(this).toggleClass("twitter-icon-show twitter-icon").dequeue(); // eslint-disable-line no-use-before-define
        });
    }
  }
});
