import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | The Monkees tablet');

test('visiting /the-monkees shows nav bar', function(assert) {
  setBreakpoint('tablet');
  visit('/the-monkees');

  andThen(function() {
    assert.equal(currentURL(), '/the-monkees');
    assert.equal(find('.header-links').length, 5, 'Tablet Navigation Menu Bar visible with 5 links');
  });
});
