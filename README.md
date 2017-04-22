demo-qunit
====================

[![Build Status](https://travis-ci.org/sutara79/demo-qunit.svg?branch=master)](https://travis-ci.org/sutara79/demo-qunit)
[![Coverage Status](https://coveralls.io/repos/github/sutara79/demo-qunit/badge.svg?branch=master)](https://coveralls.io/github/sutara79/demo-qunit?branch=master)
[![dependencies Status](https://david-dm.org/sutara79/demo-qunit/status.svg)](https://david-dm.org/sutara79/demo-qunit)
[![devDependencies Status](https://david-dm.org/sutara79/demo-qunit/dev-status.svg)](https://david-dm.org/sutara79/demo-qunit?type=dev)

An example of unit testing and code coverage for jQuery plugin.


Forked
--------------------

https://github.com/thorst/Code-Coverage-Qunit


Using
--------------------

- [Grunt](https://github.com/gruntjs/grunt), [Qunit 1.23.1](http://qunitjs.com), [PhantomJS and Instanbul](https://github.com/asciidisco/grunt-qunit-istanbul)
- [Travis CI](https://travis-ci.org/sutara79/demo-qunit), [Coveralls](https://coveralls.io/github/sutara79/demo-qunit), [David](https://david-dm.org/sutara79/demo-qunit)


Usage
--------------------

1. Fork and clone the repo.
1. Run `npm install` to install all dependencies (including grunt).
1. Run `npm run` to know what you can do.

### Unit Testing
- Browser: Access to [./test/index.html](https://sutara79.github.io/demo-qunit/test/).
- Command Line: Run `npm test`. You can also get code coverage.

```
$ npm test

> demo-qunit@0.0.1 test /path/to/folder
> grunt qunit

Running "qunit:files" (qunit) task
Testing test/index.html .OK
>> 3 assertions passed (66ms)
>> Coverage:
>> -  Lines: 100%
>> -  Statements: 100%
>> -  Functions: 100%
>> -  Branches: 100%

Done.
```

### Code Coverage
Run `npm test` like above.  
Then access to [./coverage/lcov-report/index.html](https://sutara79.github.io/demo-qunit/coverage/lcov-report/) to get the datails.


License
--------------------

[MIT](https://opensource.org/licenses/MIT)


Author
--------------------

Yuusaku Miyazaki <toumin.m7@gmail.com>
