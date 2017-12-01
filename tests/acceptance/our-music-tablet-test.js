import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Our Music tablet');

test('visiting /our-music shows nav bar', function(assert) {
  setBreakpoint('tablet');
  visit('/our-music');

  andThen(function() {
    assert.equal(currentURL(), '/our-music');
    assert.equal(find('.header-links').length, 5, 'Tablet Navigation Menu Bar visible with 5 links');
  });
});
