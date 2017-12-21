import { registerAsyncHelper } from '@ember/test';
import Ember from 'ember';
//import { test } from 'ember-qunit';

export default registerAsyncHelper('waitForControllerWithPromise', function(app,controllerName) {
  return new Ember.Test.promise(function(resolve) {

    // inform the test framework that there is an async operation in progress,
    // so it shouldn't consider the test complete
    Ember.Test.adapter.asyncStart();

    // get a handle to the promise we want to wait on
    var controller = app.__container__.lookup('controller:' + controllerName);
    var promise = controller.get('promise');

    promise.then(function(){

      // wait until the afterRender queue to resolve this promise,
      // to give any side effects of the promise resolving a chance to
      // occur and settle
      Ember.run.schedule('afterRender', null, resolve);

      // inform the test framework that this async operation is complete
      Ember.Test.adapter.asyncEnd();
    });
  });

});

// This helper was provided below
// https://stackoverflow.com/questions/26498845/using-ember-cli-how-do-i-get-an-acceptance-test-to-wait-for-a-promise
