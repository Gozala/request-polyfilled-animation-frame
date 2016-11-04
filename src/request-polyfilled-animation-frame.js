/* @flow */

import performance$now from 'performance-now'

type Request = (callback:(timestamp:number) => void) => number
type Cancel = (id:number) => void

export const now:() => number = performance$now

let lastTime = now()

export const requestPolyfilledAnimationFrame:Request =
  callback => {
    const time = now()
    const remaining = Math.max(0, 16 - (time - lastTime))
    lastTime = time + remaining
    return setTimeout(callback, remaining, lastTime)
  }

export const cancelPolyfilledAnimationFrame:Cancel =
  id =>
  clearTimeout(id)

export const requestAnimationFrame:Request = typeof window === 'undefined'
  ? requestPolyfilledAnimationFrame
  : typeof window.msRequestAnimationFrame === 'function'
  ? callback => window.msRequestAnimationFrame(callback)
  : typeof window.mozRequestAnimationFrame === 'function'
  ? callback => window.mozRequestAnimationFrame(callback)
  : typeof window.webkitRequestAnimationFrame === 'function'
  ? callback => window.webkitRequestAnimationFrame(callback)
  : typeof window.oRequestAnimationFrame === 'function'
  ? callback => window.oRequestAnimationFrame(callback)
  : requestPolyfilledAnimationFrame

export const cancelAnimationFrame:Cancel = typeof window === 'undefined'
  ? cancelPolyfilledAnimationFrame
  : typeof window.msCancelAnimationFrame === 'function'
  ? id => window.msCancelAnimationFrame(id)
  : typeof window.mozCancelAnimationFrame === 'function'
  ? id => window.mozCancelAnimationFrame(id)
  : typeof window.webkitCancelAnimationFrame === 'function'
  ? id => window.webkitCancelAnimationFrame(id)
  : typeof window.oCancelAnimationFrame === 'function'
  ? id => window.oCancelAnimationFrame(id)
  : typeof window.msCancelRequestAnimationFrame === 'function'
  ? id => window.msCancelRequestAnimationFrame(id)
  : typeof window.mozCancelRequestAnimationFrame === 'function'
  ? id => window.mozCancelRequestAnimationFrame(id)
  : typeof window.webkitCancelRequestAnimationFrame === 'function'
  ? id => window.webkitCancelRequestAnimationFrame(id)
  : typeof window.oCancelRequestAnimationFrame === 'function'
  ? id => window.oCancelRequestAnimationFrame(id)
  : cancelPolyfilledAnimationFrame
