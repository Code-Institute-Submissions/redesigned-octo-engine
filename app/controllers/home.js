import Controller from '@ember/controller';

export default Controller.extend({

  isVideoExpanded: false,

  actions: {
    toggleBody() {
      this.toggleProperty('isVideoExpanded');
    }
  }

});
