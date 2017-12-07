import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    pinterestImage: function(event) {
      //let testText = this.get('pinterest').pinImage(event);
      this.get('pinterest').pinImage(event);
      //this.set('message',testText);

    }
  }

});
