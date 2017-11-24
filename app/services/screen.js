import Service from '@ember/service';
//import EmberScreen, { breakpoint } from 'ember-screen';
import breakpoint from 'ember-screen';

export const minDesktopWidth = 992;
export const minTabletWidth = 768;

export default Service.extend({
  isMobile: breakpoint(`(max-width: ${minTabletWidth - 1}px)`),
  isTablet: breakpoint(`(max-width: ${minDesktopWidth - 1}px)`),
  isDesktop: breakpoint(`(min-width: ${minDesktopWidth}px)`)
});
