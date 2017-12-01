import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contact us desktop');

test('visiting /contact-us shows nav bar', function(assert) {
  setBreakpoint('desktop');
  visit('/contact-us');

  andThen(function() {
    assert.equal(currentURL(), '/contact-us');
    assert.equal(find('.header-links').length, 5, 'Desktop Navigation Menu Bar visible with 5 links');
  });
});
