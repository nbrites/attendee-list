# Attendees

The project is built using Angular Cli and is running Angular version 4 using Typescript as programming language, Karma for unit testing and Protractor for e2e testing.

The project is organized using a feature oriented approach and the folder containing the attendee features can be found under the path src/app/atteendee. The attendees list is built using an angular component with infinite scroll.

The styling and responsiveness relies on bootstrap.

The attendee folder contains the following:

- `attendee.ts` - the representation of the attendee data
- `attendee.service.ts` - the service responsible to comunicate with the attendee api
- inside the `list` folder is located the attendee-list component:
    - `attendee-list.component.html` - the html structure for the component
    - `attendee-list.component.ts` - the logic for the component
    - `attendee-list.component.scss` - the scss file for component specific styles
    - `attendee-list.resolver.ts` - used before the component is loaded to fetch the data from the api

## Setup

Run the following commands from the console:

- `npm install -g @angular/cli`
- `git clone https://github.com/nbrites/attendees.git`

Point your console path to the cloned respository root folder and run the following commands:

- Run `npm install`
- Run `ng serve` for a dev server.

Navigate to `http://localhost:4200/`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# External plugins

- [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap) - for styling
- [ngx-infinite-scroll](https://github.com/orizens/ngx-infinite-scroll) - for infinite scrolling
- [lodash](https://github.com/lodash/lodash) - Javascript utility library
