/**
 * Iterates over elements of `array`, returning an array of all elements
 * `predicate` returns truthy for. 
 * 번역 : array의 모든 요소를 반복하여, 모든 요소의 'predicate'된 truthy 값의 배열을 반환한다.
 * The predicate is invoked with three arguments: (value, index, array).
 * 번역 :'predicate'는 3개의 인수(value, index, array)를 사용하여 호출된다. 
 * 
 * **Note:** Unlike `remove`, this method returns a new array.
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over. 반복할 배열
 * @param {Function} predicate The function invoked per iteration. 매 반복마다 호출될 함수
 * @returns {Array} Returns the new filtered array.필터된 배열 반환
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 */
function filter(array, predicate) {
  let index = -1
  let resIndex = 0
  // array가 null 값이면 length는 0, null값이 아니면 length는 array의 길이
  // 이렇게도 쓸수있구나...신기...
  const length = array == null ? 0 : array.length
  const result = []

  while (++index < length) {
    const value = array[index]
    if (predicate(value, index, array)) {
      result[resIndex++] = value
    }
  }
  return result
}

export default filter
