import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | live shows desktop');

test('visiting /live-shows shows nav bar', function(assert) {
  setBreakpoint('desktop');
  visit('/live-shows');

  andThen(function() {
    assert.equal(currentURL(), '/live-shows');
    assert.equal(find('.header-links').length, 5, 'Desktop Navigation Menu Bar visible with 5 links');
  });
});
