import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | our music mobile');

test('visiting /our-music', function(assert) {
  visit('/our-music');

  andThen(function() {
    assert.equal(currentURL(), '/our-music');
  });
});
