/* @flow */

let lastTime = 0

type Request = (timestamp:number) => void

export const requestPolyfilledAnimationFrame =
  (callback:Request):number => {
    const now = new Date().getTime()
    const remaining = Math.max(0, 16 - (now - lastTime))
    lastTime = now + remaining
    return setTimeout(callback, remaining, lastTime)
  }

export const cancelPolyfilledAnimationFrame =
  (id:number):void =>
  clearTimeout(id)

export const requestAnimationFrame = typeof window === 'undefined'
  ? requestPolyfilledAnimationFrame
  : typeof window.msRequestAnimationFrame === 'function'
  ? (callback:Request):number => window.msRequestAnimationFrame(callback)
  : typeof window.mozRequestAnimationFrame === 'function'
  ? (callback:Request):number => window.mozRequestAnimationFrame(callback)
  : typeof window.webkitRequestAnimationFrame === 'function'
  ? (callback:Request):number => window.webkitRequestAnimationFrame(callback)
  : typeof window.oRequestAnimationFrame === 'function'
  ? (callback:Request):number => window.oRequestAnimationFrame(callback)
  : requestPolyfilledAnimationFrame

export const cancelAnimationFrame = typeof window === 'undefined'
  ? cancelPolyfilledAnimationFrame
  : typeof window.msCancelAnimationFrame === 'function'
  ? (id:number):void => window.msCancelAnimationFrame(id)
  : typeof window.mozCancelAnimationFrame === 'function'
  ? (id:number):void => window.mozCancelAnimationFrame(id)
  : typeof window.webkitCancelAnimationFrame === 'function'
  ? (id:number):void => window.webkitCancelAnimationFrame(id)
  : typeof window.oCancelAnimationFrame === 'function'
  ? (id:number):void => window.oCancelAnimationFrame(id)
  : typeof window.msCancelRequestAnimationFrame === 'function'
  ? (id:number):void => window.msCancelRequestAnimationFrame(id)
  : typeof window.mozCancelRequestAnimationFrame === 'function'
  ? (id:number):void => window.mozCancelRequestAnimationFrame(id)
  : typeof window.webkitCancelRequestAnimationFrame === 'function'
  ? (id:number):void => window.webkitCancelRequestAnimationFrame(id)
  : typeof window.oCancelRequestAnimationFrame === 'function'
  ? (id:number):void => window.oCancelRequestAnimationFrame(id)
  : requestPolyfilledAnimationFrame
