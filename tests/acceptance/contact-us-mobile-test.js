import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contact us mobile');

test('visiting /contact-us', function(assert) {
  visit('/contact-us');

  andThen(function() {
    assert.equal(currentURL(), '/contact-us');
  });
});
