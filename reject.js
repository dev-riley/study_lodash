import filter from './filter.js'
import filterObject from './filterObject.js'
import negate from './negate.js'

/**
 * The opposite of `filter` this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 * 번역 : filter 함수의 반대인 이 메서드는 'collection'에서 'predicate' 조건을 제외한(not truthy) 요소를 반환한다.
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. // 반복할 collections 
 * @param {Function} predicate The function invoked per iteration. // 매 반복마다 적용될 함수
 * @returns {Array} Returns the new filtered array. // 필터된 배열 반환
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, filter
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * reject(users, ({ active }) => active)
 * // => objects for ['fred']
 */
function reject(collection, predicate) {
  // collection이 배열이면 filter 함수, 배열이 아닌 객체이면 filterObject 함수를 func로 설정.
  const func = Array.isArray(collection) ? filter : filterObject
  // func에 predicate를 제외하는 함수인 negate를 적용한 func를 반환
  return func(collection, negate(predicate))
}

export default reject
