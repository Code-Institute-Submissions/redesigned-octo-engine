# monkees-stream-1-1

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd monkees-stream-1-1`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Manual Testing

* Social Footer icons.
  * Click on the 'FaceBook' icon, verify a new page/tab is opened with a dialog box to log into FaceBook website to share with the URL of the current page as a parameter.
  * Click on the 'Instagram' icon, verify a new page/tab is opened with 'The Monkees' instagram page.
  * Click on the 'Twitter' icon, verify a new page/tab is opened with the message posting text box prefilled with this text 'Check out this great band http://<url of the current page>:4200/home'.

* Desktop to Tablet Navigation Menu Bar
  * Resize the screen and you should see the padding between the menu links and links font size reduce

* Desktop/Table to Mobile Navigation Menu Bar
  * Resize the screen and you should see the menu links disappear and the 'hamburger' icon show
  * Click on the 'Mobile hamburger' and the mobile menu items will be shown, click on the 'Mobile Close' button will remove the menu items

* Mobile Play / Stop track menu item
  * Click on the 'Play >' menu item and a audio track should play
  * Click on the 'Stop |' menu item and the audio track should stop playing

* Home page video
  * Click on the Video icon and a video player should open with the video playing

## Acceptance tests

### Navigation Menu Bar User Stories

* As a user I want to click on the 'Home' link and be shown the 'Home' page

  * Example acceptance criteria:
    * The 'Home' page is shown

* As a user I want to click on the 'Our Music' link and be shown the 'Our Music' page

  * Example acceptance criteria:  
    * The 'Our Music' page is shown

* As a user I want to click on the 'Contact/Book Us' link and be shown the 'Contact/Book Us' page

  * Example acceptance criteria:
    * The 'Contact/Book Us' page is shown

* As a user I want to click on the 'Live Shows' link and be shown the 'Live Shows' page

  * Example acceptance criteria:
    * The 'Live Shows' page is shown

* As a user I want to click on the 'The Monkees' link and be shown the 'The Monkees' page

  * Example acceptance criteria:
    * The 'The Monkees' page is shown

* As a Mobile user I want to click on the 'Mobile Hamburger' and be shown the menu items

  * Example acceptance criteria:
    * The mobile menu items are visible

* As a Mobile user I want to click on the 'Mobile Close' button and the menu items are hidden

  * Example acceptance criteria:
    * The mobile menu items are not visible

### Home page User Stories

* As a user I want to see a video icon on the 'Home' page.  Clicking on the video icon will open a video player with autoplay.

  * Example acceptance criteria:
    * Video icon on the 'Home' page
    * Clicking on the Video icon will open a video player and start playing the video.


### Social Footer User Stories

* As a user I want to see 3 icons ('FaceBook', 'Instagram' and 'Twitter') on the footer of the website across all routes on the website.

  * Example acceptance criteria:
    * The 'FaceBook', 'Instragram' and 'Twitter' icons are visible on all routes.

## Known Issues

* The background image moves when the mobile menu items are visible, it appears to change the focus to the lead singer of the band
