import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});

test('visiting /home shows video play image', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home');
    assert.equal(find('#home-play-icon').length, 1, 'Play Icon visible');
  });
});


test('visiting / click on vido play image shows video player', function(assert) {
  visit('/');
  click('#home-play-icon');

  andThen(function() {
    assert.equal(currentURL(), '/home');
    assert.equal(find('#home-video').length, 1, 'Video Screen visible');
  });
});
