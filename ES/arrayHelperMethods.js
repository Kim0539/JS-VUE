// map
const arr1 = [1, 2, 3]

const newArr1 = arr1.map(num => num + 1)
// arr1.map(function(num) {
//     return num + 1
// })
console.log(newArr1)

// forEach => return이 없다. 특정한 작업을 가했지만
// return없이 하나씩 돌려서 실행시켜준다.
const urls = ['https://...', 'www....', 'http://...']
urls.forEach(url => {
    axios.get(url)
        .then().catch()
})

// filter
// 전체 순회하며 조건을 만족하는 요소들을 찾음.
const arr2 = [1, 2, 3, 4, 5]
const newArr2 = arr2.filter(num => num % 2)
console.log(newArr2)

// find
// 조건을 만족하는 요소를 찾으면 배열이 아닌 요소를 return(break)
const arr3 = [1, 2, 3, 4, 5]
const number = arr3.find(num => num === 3)
console.log(number)

// some
// 하나라도 만족하는지 찾아서 T/F를 return
const arr4 = [10, 20, 30]
const isBiggerThan20 = arr4.some(num => num > 20)
console.log(isBiggerThan20)

// every
// 요소들 모두가 조건을 만족하면, true / 하나라도 아니면 false
const arr5 = [10, 20, 30]
const allBiggerThan5 = arr5.every(num => num > 5)
const allBiggerThan11 = arr5.every(num => num > 11)
console.log(allBiggerThan5, allBiggerThan11)