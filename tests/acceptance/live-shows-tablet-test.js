import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Live Shows tablet');

test('visiting /live-shows shows nav bar', function(assert) {
  setBreakpoint('tablet');
  visit('/live-shows');

  andThen(function() {
    assert.equal(currentURL(), '/live-shows');
    assert.equal(find('.header-links').length, 5, 'Tablet Navigation Menu Bar visible with 5 links');
  });
});

test('visiting / shows social footer bar', function(assert) {
  setBreakpoint('tablet');
  visit('/live-shows');

  andThen(function() {
    assert.equal(currentURL(), '/live-shows');
    assert.equal(find('.icons-div').length, 3, 'Desktop footer social bar visible with 3 icons');
  });
});
