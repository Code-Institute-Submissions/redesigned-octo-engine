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

### Home page User Stories

* As a user I want to see a video icon on the 'Home' page.

  * Example acceptance criteria:
    * Video icon on the 'Home' page

### Social Footer User Stories

* As a user I want to click on the 'FaceBook' icon and a new page/tab is opened with the FaceBook login page.

  * Example acceptance criteria:
    * The 'FaceBook' page with a login dialog is shown in a new tab/page

* As a user I want to click on the 'Instagram' icon and a new page/tab is opened with 'The Monkees' Instagram page.

  * Example acceptance criteria:
    * 'The Monkees' Instagram page is shown in a new tab/page

* As a user I want to click on the 'Twitter' icon and a new page/tab is opened with the Twitter post page with the message prefilled with details about 'The Monkees' website.

  * Example acceptance criteria:
    * The 'Twitter' message posting page is shown in a new tab/page


## Known Issues
