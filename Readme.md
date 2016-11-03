# request-polyfilled-animation-frame
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]


`requestAnimationFrame` / `cancelAnimationFrame` polyfill for environments (like node) that do not have it.

## Usage

```js
import {requestAnimationFrame, cancelAnimationFrame} from 'request-polyfilled-animation-frame'
```

In addition package also exports it's internal polyfill implementations:

```js
import {requestPolyfilledAnimationFrame, cancelPolyfilledAnimationFrame} from 'request-polyfilled-animation-frame'
```
Library internally uses polyfill for `performance.now` and also exports it as `now` so that timing is consistent across all users.

```js
import {now} from 'request-polyfilled-animation-frame'
```


## Install

    npm install request-polyfilled-animation-frame

[travis-image]: https://travis-ci.org/Gozala/request-polyfilled-animation-frame.svg?branch=master
[travis-url]: https://travis-ci.org/Gozala/request-polyfilled-animation-frame
[npm-image]: https://img.shields.io/npm/v/request-polyfilled-animation-frame.svg
[npm-url]: https://npmjs.org/package/request-polyfilled-animation-frame
[downloads-image]: https://img.shields.io/npm/dm/request-polyfilled-animation-frame.svg
[downloads-url]: https://npmjs.org/package/request-polyfilled-animation-frame
[standard-image]:https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]:http://standardjs.com/
[performance-now]:https://www.npmjs.com/package/performance-now
