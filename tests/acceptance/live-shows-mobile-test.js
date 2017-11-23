import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | live shows mobile');

test('visiting /live-shows', function(assert) {
  visit('/live-shows');

  andThen(function() {
    assert.equal(currentURL(), '/live-shows');
  });
});
