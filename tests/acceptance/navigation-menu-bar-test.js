import { test } from 'qunit';
import moduleForAcceptance from 'monkees-stream-1-1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigation menu bar');

test('should link to The Home page.', function (assert) {
  visit('/');
  click('a:contains("Home")');
  andThen(function() {
    assert.equal(currentURL(), '/home', 'should navigate to The Home Page');
  });
});

test('should link to The Monkees page.', function (assert) {
  visit('/');
  click('a:contains("Monkees")');
  andThen(function() {
    assert.equal(currentURL(), '/the-monkees', 'should navigate to The Monkees Page');
  });
});

test('should link to Our Music page.', function (assert) {
  visit('/');
  click('a:contains("Music")');
  andThen(function() {
    assert.equal(currentURL(), '/our-music', 'should navigate to Our Music Page');
  });
});

test('should link to Contact Us page.', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact-us', 'should navigate to Contact Us Page');
  });
});

test('should link to the Live Shows page.', function (assert) {
  visit('/');
  click('a:contains("Live")');
  andThen(function() {
    assert.equal(currentURL(), '/live-shows', 'should navigate to the Live Shows Page');
  });
});
