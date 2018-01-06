import $ from 'jquery';
import { isBlank } from '@ember/utils';
import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';
import EmberObject, { observer } from '@ember/object';
import ukPostcodeValidator from '../utils/uk-postcode-validator';
import haversineFormula from '../utils/haversine-formula';
import messageValidator from '../utils/message-validator';
import nameValidator from '../utils/name-validator';

// the send to email code has been taken from these resources
// https://docs.aws.amazon.com/ses/latest/DeveloperGuide/examples-send-using-sdk.html
// https://medium.com/ecmastack/send-emails-with-ember-js-amazon-ses-firebase-d0fa360cd2ce

import AWS from 'npm:aws-sdk';
// Provide the full path to your config.json file.
// api keys
import config from '../config/environment';

const ses = new AWS.SES({
  "accessKeyId": config.accessKeyId,
  "secretAccessKey": config.secretAccessKey,
  "region": "us-west-2"
});


const DEBOUNCE_MS = 750;
const START_LONGITUDE = 51.4749506212706;  //address postcode SE3 7TG
const START_LATITUDE = 0.0140262103854542; //address postcode SE3 7TG
const COST_PER_KM = 0.3218688;

export default Controller.extend({

  cost: null,
  postcode: null,
  isBooking: null,

  validateFullName: null,
  validateMessage: null,
  disableButtonSubmit: true,

  actions: {

    setIsBooking: function(value) {

      this.set('isBooking', value);

    },

    validateFullName: function(fullNameValue){

      if (nameValidator(fullNameValue)) {

        this.set('validateFullName', true);

      }
    },

    validateMessage: function(messageValue){

      if (messageValidator(messageValue)) {

        this.set('validateMessage', true);

      }
    },

    emailForm: function() {

      // console.log(this.get('fullNameValue'));
      // console.log(this.get('emailValue'));
      // console.log(this.get('telephoneValue'));
      // console.log(this.get('mydate'));
      // console.log(this.get('postcode'));
      // console.log(this.get('cost'));
      // console.log(this.get('messageValue'));

      // The subject line for the email.
      const subject = "The Monkees Contact Us / Book Us";

      // Replace sender@example.com with your "From" address.
      // This address must be verified with Amazon SES.
      const sender = "c9dw5er@us-west-2.amazonses.com";

      // Replace recipient@example.com with a "To" address. If your account
      // is still in the sandbox, this address must be verified.
      const recipient = "c9dw5er@protonmail.com";

      // Specify a configuration set. If you do not want to use a configuration
      // set, comment the following variable, and the
      // ConfigurationSetName : configuration_set argument below.
      const configuration_set = "stream-1";
      // The character encoding for the email.
      const charset = "UTF-8";


      // The email body for recipients with non-HTML email clients.
      const body_text = "Contact Us / Book Us\r\n"
                      + "name: ${this.get('fullNameValue')}\r\n"
                      + "email: ${this.get('emailValue')}\r\n"
                      + "telephone: ${this.get('telephoneValue')}\r\n"
                      + "date: ${this.get('mydate')}\r\n"
                      + "postcode: ${this.get('postcode')\r\n"
                      + "cost: ${this.get('cost')}\r\n"
                      + "message: ${this.get('messageValue')}\r\n"
                      + "timestamp: ${new Date().getTime()}\r\n"

      // The HTML body of the email. (untested)
      const body_html = `<html>
      <head></head>
      <body>
        <h1>Contact Us / Book Us</h1>
        <p> name: {{this.get('fullNameValue')}<br>
            email: {{this.get('emailValue')}<br>
            telephone: {{this.get('telephoneValue')}<br>
            date: {{this.get('mydate')}<br>
            postcode: {{this.get('postcode')<br>
            cost: {{this.get('cost')}<br>
            message: {{this.get('messageValue')}<br>
            timestamp: {{new Date().getTime()}<br>
          </p>
      </body>
      </html>`;


 // Specify the parameters to pass to the API.
 var params = {
   Source: sender,
   Destination: {
     ToAddresses: [
       recipient
     ],
   },
   Message: {
     Subject: {
       Data: subject,
       Charset: charset
     },
     Body: {
       Text: {
         Data: body_text,
         Charset: charset
       },
       Html: {
         Data: body_html,
         Charset: charset
       }
     }
   },
   ConfigurationSetName: configuration_set
 };

 // Create a new SES object.
 //var ses = new AWS.SES();

  //Try to send the email.
  ses.sendEmail(params, function(err, data) {
    // If something goes wrong, print an error message.
    // This code requires  AWS settings require a domain record to be set which is beyond the scope of this project,
    // 'Email address is not verified. The following identities failed the check in region US-WEST-2: c9dw5er@us-west-2.amazonses.com'
    //"If you want Sender Policy Framework (SPF) checks to succeed, you must publish an SPF record to the DNS server of the MAIL FROM domain. Learn more.""


    if(err) {
      console.log(err.message);
    } else {
        console.log("Email sent! Message ID: ", data.MessageId);
      }
  });

  this.transitionToRoute('message-sent');


    }

  },

  observedValuesChanged: observer('validateFullName', 'validateMessage', function() {
    // deal with the change

    if (this.get('validateFullName') && this.get('validateMessage') ) {

      this.set('disableButtonSubmit', false);

    }


  }),


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

       this.set('postcode', location);

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

       //NOTE: could also write this as
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
