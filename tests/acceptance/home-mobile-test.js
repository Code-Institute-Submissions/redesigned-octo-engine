import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Home Mobile');

test('visiting /home shows single mobile icon in nav bar', function(assert) {
  setBreakpoint('mobile');
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/home');
    assert.equal(find('div>#mobile-menu').length, 1, 'Mobile Navigation Menu Bar present');
  });
});
