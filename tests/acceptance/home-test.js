import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});

test('visiting / shows body image', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/home');
    assert.equal(find('#home-play-icon').length, 1, 'Play Icon visible');
  });
});
