import messageValidator from 'monkees-stream-1-1/utils/message-validator';
import { module, test } from 'qunit';

module('Unit | Utility | message validator');

// Replace this with your real tests.
test('it returns true for a string of 10 word characters or more', function(assert) {
  let result = messageValidator('asdfgqwerty');
  assert.equal(result,true);
});

test('it returns false for a string of less than 10 word characters', function(assert) {
  let result = messageValidator('asqweqwdf');
  assert.equal(result,false);
});
