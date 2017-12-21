import ukPostcodeValidator from 'monkees-stream-1-1/utils/uk-postcode-validator';
import { module, test } from 'qunit';

module('Unit | Utility | uk postcode validator');

// Replace this with your real tests.
test('it returns true for a valid UK postcode', function(assert) {
  let result = ukPostcodeValidator('se37tg');
  assert.equal(result,true);
});

test('it returns false for an invalid UK postcode', function(assert) {
  let result = ukPostcodeValidator('se37t');
  assert.equal(result,false);
});
