import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | The Monkees');

test('visiting /the-monkees', function(assert) {
  visit('/the-monkees');

  andThen(function() {
    assert.equal(currentURL(), '/the-monkees');
  });
});
