export function initialize(appInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');
  appInstance.inject('controller', 'pinterest', 'service:pinterest');
}

export default {
  name: 'pinterest',
  after: 'ember-data',
  initialize
};
