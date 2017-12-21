import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:contact-us', 'Unit | Controller | contact us', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('contact-us cost property', function(assert) {
  assert.expect(1);

  let controller = this.subject();

  assert.equal(controller.get('cost'), null, 'cost initialized');

});
