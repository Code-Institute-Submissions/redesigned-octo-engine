import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home desktop');

test('visiting /home', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});
