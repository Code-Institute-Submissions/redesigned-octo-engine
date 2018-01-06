import nameValidator from 'monkees-stream-1-1/utils/name-validator';
import { module, test } from 'qunit';

module('Unit | Utility | name validator');

// Replace this with your real tests.
test('it returns true for a string of 3 word characters', function(assert) {
  let result = nameValidator(' se3');
  assert.equal(result,true);
});

test('it returns false for a string of 2 word characters', function(assert) {
  let result = nameValidator('se');
  assert.equal(result,false);
});
