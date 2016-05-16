Dynamic table
==============

Creates a table from snapshot.csv file. Updates table with deltas from deltas.csv.
Once the all deltas are updated, the deltas repeating from the beginning.


Technologies
--------------

* Javascript
* Node.js
* Express
* CSS
* HTML


Installation
--------------

- Please upload and install node.js v4.4.1 [link](https://nodejs.org/en/download/)
- Install node package manager [link](https://www.npmjs.com/)



Setup
--------------
* Assuming you’ve already installed Node.js go to you project folder.

`$ cd test`

* In a project folder using command line please **make an npm initialization** of the project that will install all needed packages. Use the npm init command.

`$ npm install`

* In project folder using command line ** run gulp command ** to start server and recompile files and reload server when js or sass files changed

`$ gulp`

* ** or run node.js ** server that will listen to the port 4040

`$ node server.js`

In console you will see message that server is started **"Express server started"**

* Please open your browser with url `localhost:4040`


Unit testing
--------------
* Unit tests are running under port `localhost:4041`, please insure that it is free
* To run unit tests please login as sudo and use command
`$ karma start`

* To see the results and coverage please see the files in directory
client/js/unit-testing/coverage

For development additionally used
------------------------------------

* Gulp [link](http://gulpjs.com/)
* SASS [link](http://sass-lang.com/)
* Jasmine
* Karma test runner
* Coverage karma tool




