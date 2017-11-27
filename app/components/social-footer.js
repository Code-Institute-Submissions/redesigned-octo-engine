import Ember from 'ember';
import Component from '@ember/component';
import { inject as service } from '@ember/service';

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
      Ember.$('.icons-div').attr('style','display:inline-block');
      Ember.$('#twitter-div').attr('style','width:35px');
    },
    mouseLeaveTwitter() {
//change this to class

      Ember.$('.icons-div')
        .delay(5000)
        .queue(function() {
          $(this).attr('style', 'display:none').dequeue(); // eslint-disable-line no-use-before-define
        });
      Ember.$('#twitter-div')
        .delay(5000)
        .queue(function() {
          $(this).attr('style', 'width:18px').dequeue(); // eslint-disable-line no-use-before-define
        });
    }
  }
});
