import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Contact Us tablet');

test('visiting /contact-us shows nav bar', function(assert) {
  visit('/contact-us');
  setBreakpoint('tablet');

  andThen(function() {
    assert.equal(currentURL(), '/contact-us');
    assert.equal(find('.header-links').length, 5, 'Tablet Navigation Menu Bar visible with 5 links');
  });
});
