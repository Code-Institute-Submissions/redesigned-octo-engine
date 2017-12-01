import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | our music desktop');

test('visiting /our-music shows nav bar', function(assert) {
  setBreakpoint('desktop');
  visit('/our-music');

  andThen(function() {
    assert.equal(currentURL(), '/our-music');
    assert.equal(find('.header-links').length, 5, 'Desktop Navigation Menu Bar visible with 5 links');
  });
});
