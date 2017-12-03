import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Home Desktop');

test('visiting / shows nav bar', function(assert) {
  setBreakpoint('desktop');
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/home');
    assert.equal(find('.header-links').length, 5, 'Desktop Navigation Menu Bar visible with 5 links');
  });
});

test('visiting / shows social footer bar', function(assert) {
  setBreakpoint('desktop');
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/home');
    assert.equal(find('.icons-div').length, 3, 'Desktop footer social bar visible with 3 icons');
  });
});
