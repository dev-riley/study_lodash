/**
 * Creates a function that negates the result of the predicate `func`. 
 * 번역 : 서술된 'func'의 결과를 제외한 함수를 만든다.
 * The `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 * 번역 : 서술된 'func'는 생성된 함수의 'this' 바인딩과 인수로 호출된다.
 *
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.제외할 함수 서술
 * @returns {Function} Returns the new negated function. 
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0
 * }
 *
 * filter([1, 2, 3, 4, 5, 6], negate(isEven))
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function')
  }
  return function(...args) {
    return !predicate.apply(this, args)
  }
}

export default negate
