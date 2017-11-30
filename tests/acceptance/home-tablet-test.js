import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Home Tablet');

test('visiting /home shows nav bar', function(assert) {
  visit('/home');
  setBreakpoint('tablet');

  andThen(function() {
    assert.equal(currentURL(), '/home');
    assert.equal(find('.header-links').length, 5, 'Tablet Navigation Menu Bar visible with 5 links');
  });
});
