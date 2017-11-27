import Service from '@ember/service';

export default Service.extend({

  windowUrl: function() {
    return window.location.href;
  }

});
