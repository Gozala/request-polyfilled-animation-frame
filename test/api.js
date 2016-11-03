/* @flow */

import * as API from "../"
import test from "tape"

test("test baisc", test => {
  test.isEqual(typeof(API), "object")
  test.ok(isFunction(API.requestAnimationFrame), 'exports requestAnimationFrame')
  test.ok(isFunction(API.cancelAnimationFrame), 'exports cancelAnimationFrame')
  test.ok(isFunction(API.requestPolyfilledAnimationFrame),
          'exports requestPolyfilledAnimationFrame')
  test.ok(isFunction(API.cancelPolyfilledAnimationFrame),
          'exports cancelPolyfilledAnimationFrame')

  test.end()
})


const isFunction =
  value =>
  typeof(value) === "function"
