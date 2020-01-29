## Prerequisites

[Node.js](http://nodejs.org/) >= 6 must be installed.

## Installation

- Running `npm install` in the component's root directory will install everything you need for development.

## Demo Development Server

- `npm start` will run a development server with the component's demo app at [http://localhost:8080/index](http://localhost:8080/index) with hot module reloading.

## Running Tests

- `npm test` will run the unit tests once.

- `npm run test:watch` will run the unit tests, and watch for changes

- `npm run test:coverage` will run the tests and produce a coverage report in `coverage/`.

- `npm run test:watch` will run the tests on every change.

- `npm start` will run a local demo server, with output from src/demo.js

- `npm run build` will build the distributable

- `npm run dev` will build the distributable and watch for changes for the source files

## Proposing a change
If you intend to change the public API or make any breaking changes, you should file a github issue first. This lets us reach an agreement on your proposal before you put significant effort into it.

If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.

## Making a pull request
When making a new pull request, mention any issues it's linked to in the description.

Pull requests will only be considered for review if all the tests pass with 100% code coverage.

## Building

- `npm run build` will build the component for publishing to npm and also bundle the demo app.

- `npm run clean` will delete built resources.

<sup><sub>Copyright 2020 Elsevier</sub></sup>