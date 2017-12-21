//import { moduleFor } from 'ember-qunit';
import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contact us');

test('visiting /contact-us', function(assert) {
  visit('/contact-us');

  andThen(function() {
    assert.equal(currentURL(), '/contact-us');
  });
});

// test('visiting /contact-us and entering postocde to calculate travel cost', function() {
//
//   visit('/contact-us');
//
//   fillIn('#search-postcode', "CM12 0DS");
//   waitForControllerWithPromise('contact-us'); // <-- simple & elegant!
//   andThen(function(){
//     assert.equal(currentURL(), '/contact-us');
//     var searchResult = find('.decimal').value();
//     equal(searchResult, 10.520969073383625);
//   });
// });
