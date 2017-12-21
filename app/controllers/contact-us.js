import $ from 'jquery';
import { isBlank } from '@ember/utils';
import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

import ukPostcodeValidator from '../utils/uk-postcode-validator';
import haversineFormula from '../utils/haversine-formula';

const DEBOUNCE_MS = 750;
const START_LONGITUDE = 51.4749506212706;  //address postcode SE3 7TG
const START_LATITUDE = 0.0140262103854542; //address postcode SE3 7TG
const COST_PER_KM = 0.3218688;

export default Controller.extend({

  cost: null,

  searchPostcode: task(function * (location) {
     if (isBlank(location)) { return []; }
     this.set('cost', null); //reset the displayed valued to original state

     // Pause here for DEBOUNCE_MS milliseconds. Because this
     // task is `restartable`, if the user starts typing again,
     // the current search will be canceled at this point and
     // start over from the beginning. This is the
     // ember-concurrency way of debouncing a task.
     yield timeout(DEBOUNCE_MS);

     let url = `https://api.postcodes.io/postcodes/${location.replace(/\W/g, "")}`;

     // We yield an AJAX request and wait for it to complete. If the task
     // is restarted before this request completes, the XHR request
     // is aborted (open the inspector and see for yourself :)


     // We check input is a valid UK postcode
     if (ukPostcodeValidator(location)) {

       let json = yield this.get('getJSON').perform(url);

       if (json.status == '200') {

         let coordindates = [START_LONGITUDE, START_LATITUDE];

         coordindates.push(json.result.latitude,json.result.longitude)

         let distance = haversineFormula(coordindates[0], coordindates[1], coordindates[2], coordindates[3]);

         let cost = distance * COST_PER_KM;

         this.set('cost', cost);

       }
     }

}).restartable(),

   getJSON: task(function * (url) {
     let xhr;
     try {
       xhr = $.getJSON(url);
       let result = yield xhr.promise();
       return result;

       // NOTE: could also write this as
       // return yield xhr;
       //
       // either way, the important thing is to yield before returning
       // so that the `finally` block doesn't run until after the
       // promise resolves (or the task is canceled).
     } finally {
       xhr.abort();
     }
   })


});

// The above controller code was taken and modified from the below example
// https://ember-concurrency.com/#/docs/examples/autocomplete
