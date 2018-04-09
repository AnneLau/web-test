// /* 利用concat() */
// var arr = ['old', 1, true, null, undefined]
// var new_arr = arr.concat()
// new_arr[0] = 'new'
// console.log(arr) /* ["old", 1, true, null, undefined] */
// console.log(new_arr) /*  ["new", 1, true, null, undefined] */

// /* 利用slice */
// var arr1 = ['old', 1, true, null, undefined]
// var new_arr1 = arr.slice()
// new_arr1[0] = 'new'
// console.log(arr1)
// console.log(new_arr1)

// /* 无论是concat还是slice 拷贝对象都是拷贝的对象的引用 */
// var arr2 = [{old: 'old'}, ['old']]
// var new_arr2 = arr2.concat()
// arr2[0].old = 'new'
// console.log(arr2) // [{old: 'new'}, ['old']]
// console.log(new_arr2) // [{old: 'new'}, ['old']]

// /* 利用JSON.stringify实现深拷贝 */
// var arr3 = ['old', 1, true, ['old1', 'old2'], {
//   old: 1
// }]
// var new_arr3 = JSON.parse(JSON.stringify(arr3))
// arr3[4].old = 'new'
// console.log(arr3) /* ['old', 1, true, ['old1', 'old2'], {
//   old: 'new'
// }] */
// console.log(new_arr3) /* ['old', 1, true, ['old1', 'old2'], {
//   old: 1
// }] */

// /* 问题 */
// var arr4 = [
//   function () {
//     console.log('a')
//   }, {
//     b: function () {
//       console.log('b')
//     }
//   }
// ]
// var new_arr4 = JSON.parse(JSON.stringify(arr4))
// console.log(arr4)
// console.log(new_arr4)

/* 实现浅拷贝 */
function shallowCopy (obj) {
  if (typeof obj !== 'object') return
  var newObj = obj instanceof Array ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key])
      newObj[key] = obj[key]
    }
  }
  return newObj
}

// var deepCopy = function (obj) {
//   if (typeof obj !== 'object') return
//   var newObj = obj instanceof Array ? [] : {}
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
//       console.log(obj[key])
//     }
//   }
//   return newObj
// }

/* 深拷贝 */
var deepCopy = function (obj) {
  if (obj === null || typeof obj !== 'object') return
  var newObj = obj instanceof Array ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}

// var arr = [1, 2, 3, 4, {a: 1}]
// var newArr = deepCopy(arr)
// newArr[4].a = 10
// console.log(arr)
// console.log(newArr)
function X () {
  this.x = 5
  this.arr = [1, 2, 3]
}
var arr = {x: new Date(), y: new X(), arr: [12, 3, 4], z: null}
var newArr = deepCopy(arr)
newArr.x = new Date(1234456777777)
console.log(arr.x === newArr.x)
console.log(arr)
console.log(newArr)
