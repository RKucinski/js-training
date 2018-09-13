'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(string){
   return string.substr(2)
}

function cutLast(string){
    return string.substr(0, string.length-2)
}

function cutFirstLast(string){
    return string.substr(2, string.length-4)
 }




//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(cutFirst('abc'), ('c'))
assert.deepStrictEqual(cutLast('abc'), ('a'))
assert.deepStrictEqual(cutFirstLast('abcde'), ('c'))
// End of tests */
