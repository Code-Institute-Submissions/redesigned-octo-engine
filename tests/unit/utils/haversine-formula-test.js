import haversineFormula from 'monkees-stream-1-1/utils/haversine-formula';
import { module, test } from 'qunit';

module('Unit | Utility | haversine formula');

test('it calculates distance when called with 2 longitude and 2 latitude values', function(assert) {
  let result = haversineFormula(51.4749506212706, 0.0140262103854542, 51.635220491269, 0.410368061546297);
  assert.equal(result,32.68713548310251,'distance between 2 points calculated');
});
